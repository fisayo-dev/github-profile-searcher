const page = ({ params }: { params: { id: string } }) => {
    const id = params.id
    console.log(id)                         
  return (
    <div>{id}</div>
  )
}

export default page