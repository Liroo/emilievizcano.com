import ReactDOM from 'react-dom';

export interface UIPortalProps {
  /** Children to render inside the overlay */
  children: React.ReactNode;
}

export default function UIPortal({ children }: UIPortalProps) {
  const containerRoot = document.getElementById('portal-root');

  return ReactDOM.createPortal(<div>{children}</div>, containerRoot);
}
