import './AuthBut.scss'

function AuthBut({ button, handleReg, textInButt }) {
  return (
    <button
      id="form-send"
      className={ button ? 'reg__but' : 'reg__but reg__but-close'}
      type="submit"
      onClick={handleReg}
      disabled={ button ? '' : 'disabled'}
    >
      {textInButt}
    </button>
  )
}

export default AuthBut
