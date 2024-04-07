import React from 'react'
import { connect } from 'react-redux'

const ItemOverview = ({ data, loading, error }) => {
  if (loading || !data[0]) return(<div>Loading...</div>)

  if (error) return(<div>Error: {error}</div>)

  const { image, subtitle, tags, title } = data[0]

  return(
    <div className="item-overview">
      <img className="product-image" src={image} alt={title} />
      <p className="title">{title}</p>
      <p className="subtitle">{subtitle}</p>
      <div className="tags-container">
        {tags.map((tag, i) => (
          <div className="tag" key={i}>
            <p className="tag=text">{tag}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

const mapStateToProps = (state) => ({
  data: state.data.data,
  loading: state.data.loading,
  error: state.data.error
})

export default connect(mapStateToProps)(ItemOverview)