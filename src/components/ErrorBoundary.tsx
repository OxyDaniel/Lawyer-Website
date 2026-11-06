import { Component, type ErrorInfo, type ReactNode } from 'react';
import { Button } from './ui';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  errorMessage: string;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    errorMessage: '',
  };

  public static getDerivedStateFromError(error: Error): State {
    return {
      hasError: true,
      errorMessage: error.message || 'An unexpected application error occurred.',
    };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error:', error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div
          role="alert"
          className="flex min-h-dvh flex-col items-center justify-center bg-background px-6 py-16 text-center text-foreground"
        >
          <div className="max-w-lg border border-primary/30 bg-surface p-8 md:p-12">
            <p className="font-mono text-xs uppercase tracking-widest text-primary mb-3">
              Austin Mamedu &amp; Co.
            </p>
            <h1 className="font-display text-2xl md:text-3xl text-foreground mb-4">
              Unable to display this page view
            </h1>
            <p className="text-sm text-muted leading-relaxed mb-8">
              {this.state.errorMessage}
            </p>
            <Button
              tone="primary"
              onClick={() => {
                this.setState({ hasError: false, errorMessage: '' });
                window.location.reload();
              }}
            >
              Reload Page
            </Button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
