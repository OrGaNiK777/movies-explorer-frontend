import "./Title.css"

function Title({ textTitle, individual }) {
  return (
    <h2 className={`title ${individual}`}>{textTitle}</h2>
  )
}

export default Title