import { useState } from "react";

interface Props {
  item: string;
  initialValue: number;
}

export function Counter({item,initialValue}: Props) {
  const [count, setCount] = useState(initialValue);

  return (
      <div className="hbox space-between mt20">
        <h3 className="paragraph">{item} counter: {count}</h3>
        <button className="button" onClick={() => setCount(count + 1)}>
          add {item}
        </button>
      </div>
  );
} 


/* import { Component } from "react";

interface Props {
  item: string;
  initial: number;
}

interface State {
  count: number;
}

export class Counter extends Component<Props, State> {
  state = {
    count: this.props.initial,
  };

  addItem = () => {
    this.setState({ count: this.state.count + 1 });
  };
  render() {
    const {item} = this.props;
    return (
      <div className="hbox space-between mt20">
        <h3 className="paragraph">{item} counter: {this.state.count}</h3>
        <button className="button" onClick={this.addItem}>
          add a {item}
        </button>
      </div>
    );
  }
}
 */