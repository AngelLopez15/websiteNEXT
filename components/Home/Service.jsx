function Service(props) {
  const {
    name,
    detail
  } = props
  
  return (
    <article className="service-item">
      <span className="jam jam-phone"></span>
      <h3>{ name }</h3>
      <p>{ detail }</p>
    </article>
  )
}

export default Service