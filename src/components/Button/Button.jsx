import css from './Button.module.css'

export const Button = ({clickLoad}) => {
  return (
    <button onClick={clickLoad} type='button' className={css.Button}>
      Load more
    </button>
  )
}
