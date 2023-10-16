export default function Title({title}) {
  const estilo = {
    paddingTop: '10rem'

};
  return (
    <div className="container">
        <h2 className="text-white text-center fs-1 mb-5" style={estilo}> 
            {title}
        </h2>
    </div>
  )
}

