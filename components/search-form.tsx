import React from 'react'
import PropTypes from 'prop-types'

// 子コンポーネント
class Child extends React.Component {
  static propTypes = {
    func: PropTypes.func.isRequired,
  }

  constructor(props) {
    super(props)
    this.state = {
      str: '',
    }
  }

  // ボタンが押された時にコールバック関数を呼び出す
  onClick = () => {
    this.props.func(this.state.str)
  }

  // テキストボックスの内容が変更された時にstateを更新
  onChange = (e) => {
    this.setState({ str: e.target.value })
  }

  render() {
    return (
      <div>
        <input type='text' onChange={(e) => this.onChange(e)} />
        <input type='button' onClick={() => this.onClick()} value={'ok'} />
      </div>
    )
  }
}

export default withStyles(Child)
