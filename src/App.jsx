const Header= (props)=>{
   
    return <h1>{props.course}</h1>
}

const Content = (props)=>{
  const z = props.parts

  return(<div>
    {z.map((part,index)=>(
      <p key ={index}> 
      {part.name}: {part.exercises}</p>
    ))}
  </div>)
 
}

const Total = (props)=> {
  let total = 0;
  const t = props.parts
  t.forEach(value =>{

    total += value.exercises
  })
  return <p>Number of exercises {total}</p>
}



function App() {
  const course ='Half Stack application development'
  const parts =[
  {
    name:'Fundamentals of React',
    exercises:10
  } ,
  {
    name:'Using props to pass data',
    exercises:7
  },
  {
    name:'State of a component',
    exercises:14
  }
  
  ]

  return (
    <div>
      <Header course ={course}/>
      <Content parts ={parts}/>
      <Total parts ={parts} />
      
    </div>
  )
}

export default App
