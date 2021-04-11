function Food({fav}){// {fav} = props.fav (오브젝트에서 key값 불러오는 거랑 같지)
  return <h1>I like {fav}</h1> 
}

//const foodILike = []
const friends = ["frog", "yooobssi", "solo"]
friends.map(current => {
  console.log(current)
  return 0;
});


function App() {
  return (
    <div className="App">
      <h1>Hello</h1>
      <Food fav="kimchi"/>
    </div>
  );
}

export default App;
