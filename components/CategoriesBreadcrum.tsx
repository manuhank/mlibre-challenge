function CategoriesBreadcrum({ categories }: { categories: string[] }) {
    const renderCategories = ()=>categories.map((category) => (
        <span className="category">{category}</span>
      ))
  return (
    <div className="breadcrumb">
      {renderCategories()}
    </div>
  )
}

export default CategoriesBreadcrum
