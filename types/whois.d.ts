declare module 'whois' {
  export interface WhoisOptions {
    server?: string
    follow?: number
    timeout?: number
    verbose?: boolean
  }
  function lookup(domain: string, options: WhoisOptions, callback: (err: any, data: string) => void): void;
  function lookup(domain: string, callback: (err: any, data: string) => void): void;
  const whois: { lookup: typeof lookup };
  export = whois;
} 