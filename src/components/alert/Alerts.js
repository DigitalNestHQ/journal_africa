import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { removeAlert } from "../../store/actions/alertActions"

const Alerts = () => {
  const dispatch = useDispatch()
  const alert = useSelector((state) => state.alert)
  return (
    alert.length > 0 &&
    alert.map(({ type, message, id }) => {
      return (
        <div key={id} className={`alert alert-${type}`}>
          {message}
          <button type="button" className="close">
            <span onClick={() => dispatch(removeAlert(id))}>&times;</span>
          </button>
        </div>
      )
    })
  )
}

export default Alerts
