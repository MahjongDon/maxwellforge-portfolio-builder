
import React, { useState, useEffect } from 'react';
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { Copy, RefreshCw, Shield } from "lucide-react";
import { cn } from "@/lib/utils";

// Password strength indicator component
const PasswordStrengthIndicator = ({ score }: { score: number }) => {
  const getStrengthText = () => {
    if (score <= 1) return 'Weak';
    if (score <= 2) return 'Fair';
    if (score <= 3) return 'Good';
    return 'Strong';
  };

  const getStrengthColor = () => {
    if (score <= 1) return 'bg-red-500';
    if (score <= 2) return 'bg-yellow-500';
    if (score <= 3) return 'bg-green-400';
    return 'bg-green-600';
  };

  return (
    <div className="mt-6 space-y-2">
      <div className="flex justify-between items-center">
        <span className="text-sm font-medium text-muted-foreground">Strength</span>
        <span className="text-sm font-medium">{getStrengthText()}</span>
      </div>
      <div className="h-2 w-full bg-secondary rounded-full overflow-hidden">
        <div 
          className={cn("h-full transition-all duration-500", getStrengthColor())} 
          style={{ width: `${Math.min(100, score * 25)}%` }}
        ></div>
      </div>
    </div>
  );
};

const PasswordGenerator = () => {
  // State declarations
  const [passwordLength, setPasswordLength] = useState<number>(12);
  const [includeUppercase, setIncludeUppercase] = useState<boolean>(true);
  const [includeNumbers, setIncludeNumbers] = useState<boolean>(true);
  const [includeSymbols, setIncludeSymbols] = useState<boolean>(true);
  const [password, setPassword] = useState<string>('');
  const [isGenerating, setIsGenerating] = useState<boolean>(false);
  const [strengthScore, setStrengthScore] = useState<number>(0);

  // Character sets
  const charSets = {
    lowercase: 'abcdefghijklmnopqrstuvwxyz',
    uppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
    numbers: '0123456789',
    symbols: '!@#$%^&*()_-+=<>?'
  };

  // Calculate password strength
  const calculatePasswordStrength = (pwd: string) => {
    let score = 0;
    
    if (pwd.length >= 8) score += 1;
    if (pwd.length >= 12) score += 1;
    
    if (/[A-Z]/.test(pwd)) score += 0.5;
    if (/[0-9]/.test(pwd)) score += 0.5;
    if (/[^A-Za-z0-9]/.test(pwd)) score += 1;
    
    const hasMultipleTypes = 
      (/[A-Z]/.test(pwd) ? 1 : 0) +
      (/[a-z]/.test(pwd) ? 1 : 0) +
      (/[0-9]/.test(pwd) ? 1 : 0) +
      (/[^A-Za-z0-9]/.test(pwd) ? 1 : 0);
    
    if (hasMultipleTypes >= 3) score += 1;
    
    return Math.min(4, Math.round(score));
  };

  // Generate password
  const generatePassword = () => {
    setIsGenerating(true);
    
    setTimeout(() => {
      try {
        // Build character set
        let chars = charSets.lowercase;
        if (includeUppercase) chars += charSets.uppercase;
        if (includeNumbers) chars += charSets.numbers;
        if (includeSymbols) chars += charSets.symbols;
        
        if (chars === charSets.lowercase) {
          toast.error("Please select at least one character type");
          setIsGenerating(false);
          return;
        }
        
        // Generate secure random values
        const array = new Uint32Array(passwordLength);
        window.crypto.getRandomValues(array);
        
        // Map to characters
        let result = '';
        for (let i = 0; i < passwordLength; i++) {
          result += chars[array[i] % chars.length];
        }
        
        // Ensure character type requirements are met
        let hasLowercase = /[a-z]/.test(result);
        let hasUppercase = includeUppercase ? /[A-Z]/.test(result) : true;
        let hasNumber = includeNumbers ? /[0-9]/.test(result) : true;
        let hasSymbol = includeSymbols ? /[^A-Za-z0-9]/.test(result) : true;
        
        if (!(hasLowercase && hasUppercase && hasNumber && hasSymbol)) {
          generatePassword();
          return;
        }
        
        setPassword(result);
        setStrengthScore(calculatePasswordStrength(result));
        
      } catch (error) {
        console.error('Error generating password:', error);
        toast.error("Failed to generate password");
      } finally {
        setIsGenerating(false);
      }
    }, 400);
  };

  // Copy password to clipboard
  const copyToClipboard = async () => {
    if (!password) {
      toast.error("No password to copy");
      return;
    }
    
    try {
      await navigator.clipboard.writeText(password);
      toast.success("Password copied to clipboard");
    } catch (error) {
      console.error('Error copying to clipboard:', error);
      toast.error("Failed to copy password");
    }
  };

  // Generate password on initial load
  useEffect(() => {
    generatePassword();
  }, []);

  return (
    <div className="w-full max-w-md mx-auto p-6 space-y-8 animate-fadeIn">
      {/* Password Display */}
      <div className="relative">
        <div className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">
          <Shield size={18} />
        </div>
        <input
          type="text"
          value={password}
          readOnly
          className="w-full h-12 pl-10 pr-10 rounded-lg border border-input bg-background text-foreground shadow-sm transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary font-mono text-base"
        />
        <button
          onClick={copyToClipboard}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
          aria-label="Copy to clipboard"
        >
          <Copy size={18} />
        </button>
      </div>

      {/* Password Strength */}
      <PasswordStrengthIndicator score={strengthScore} />

      {/* Options Form */}
      <div className="space-y-6">
        {/* Password Length */}
        <div className="space-y-2">
          <div className="flex justify-between">
            <Label htmlFor="password-length" className="text-sm font-medium">Password Length</Label>
            <span className="text-sm font-medium">{passwordLength}</span>
          </div>
          <Slider
            id="password-length"
            min={8}
            max={20}
            step={1}
            value={[passwordLength]}
            onValueChange={(vals) => setPasswordLength(vals[0])}
            className="cursor-pointer"
          />
        </div>

        {/* Character Options */}
        <div className="space-y-3">
          <h3 className="text-sm font-medium mb-2">Character Types</h3>
          
          <div className="flex items-center space-x-2">
            <Checkbox 
              id="uppercase" 
              checked={includeUppercase} 
              onCheckedChange={(checked) => setIncludeUppercase(checked as boolean)}
              className="data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground"
            />
            <Label htmlFor="uppercase" className="text-sm cursor-pointer">Include Uppercase Letters (A-Z)</Label>
          </div>
          
          <div className="flex items-center space-x-2">
            <Checkbox 
              id="numbers" 
              checked={includeNumbers} 
              onCheckedChange={(checked) => setIncludeNumbers(checked as boolean)}
              className="data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground"
            />
            <Label htmlFor="numbers" className="text-sm cursor-pointer">Include Numbers (0-9)</Label>
          </div>
          
          <div className="flex items-center space-x-2">
            <Checkbox 
              id="symbols" 
              checked={includeSymbols} 
              onCheckedChange={(checked) => setIncludeSymbols(checked as boolean)}
              className="data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground"
            />
            <Label htmlFor="symbols" className="text-sm cursor-pointer">Include Symbols (!@#$%)</Label>
          </div>
        </div>

        {/* Generate Button */}
        <Button 
          onClick={generatePassword} 
          className="w-full h-11 bg-primary hover:bg-primary/90 text-primary-foreground font-medium rounded-lg shadow-sm transition-all duration-200 hover:shadow-md"
          disabled={isGenerating}
        >
          {isGenerating ? (
            <RefreshCw className="mr-2 h-4 w-4 animate-spin" />
          ) : (
            <RefreshCw className="mr-2 h-4 w-4" />
          )}
          Generate Password
        </Button>
      </div>
    </div>
  );
};

export default PasswordGenerator;
