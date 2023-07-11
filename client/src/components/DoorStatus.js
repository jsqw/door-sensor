import dooropen from '../images/dooropen.png'
import doorclosed from '../images/doorclosed.png'

const DoorStatus = ({ doorOpen }) => {
  return (
    <div className='container mb-auto flex-auto items-center p-10 text-center text-2xl text-white'>
      {doorOpen ?
        <p>The door is open.
          <img src={dooropen}  alt="" width={300} style={{ margin: 'auto' }}/>
        </p>
        :
        <p>The door is closed.
          <img src={doorclosed} alt="" width={300} style={{ margin: 'auto' }}/></p>
      }
    </div>
  )
}
export default DoorStatus