declare global {
  interface Window {
    electronAPI: {
      on(channel: string, func: (arg: string) => void): (() => void) | undefined;
      once(channel: string, func: (arg: string) => void): void;
      closeMainWindow(): void;
      minimizeMainWindow(): void;
      maximizeMainWindow(): void;
      getHostName(): Promise<string>;
      openExternalUrl(url: string): void;
    };
  }
}
export {};
