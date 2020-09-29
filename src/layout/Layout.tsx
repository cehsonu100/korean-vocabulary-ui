import * as React from "react";

export interface LayoutProps {
  
}
export interface LayoutState {
  
}

export class Layout extends React.Component<LayoutProps,LayoutProps> {
  constructor(props: LayoutProps) {
    super(props);
    this.state = {

    };
  }

  render() {
    return(
      <>
        <h1>Hello there</h1>
        <h2>Something got changed</h2>
      </>
    );
  }
}