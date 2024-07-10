import TextInput from './components/TextInput'

function App() {

  return (
    <div>
      <TextInput placeholder={"What's happening ... "} maxLength={125} />
      <TextInput placeholder={"Tell me the news ... "} maxLength={250} />
    </div>
  )

}

export default App
