
export function Input({text})
{
  return (
    <>
      <label>{text}</label>
      <input/>
      <br />    
    </>

  );
}

export default function GenInfo()
{
  return (
    <>
      <h3>This is general info.</h3>
      <Input text = "Name: "/>
      <Input text = "Email: "/>
      <Input text = "Mobile: "/>
    </>
  )
}

