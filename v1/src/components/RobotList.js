import { useEffect, useState } from 'react'
import store from '../stores/RobotStore'
import Robot from './Robot'
import RobotForm from './RobotForm'

function RobotList () {
  const [robots, setRobots] = useState([])

  useEffect(() => {
    setRobots(store.getRobots())
    store.emitter.addListener('UPDATE', () => {
      setRobots(store.getRobots())
    })
  }, [])
  const handleAdd = (robot) => {
    store.addRobot(robot);
  };

  
  return (
    <div>
      <RobotForm onAdd={handleAdd}/> 
      <div>
        A list of robots
        <div>
          {
            robots.map((e, i) => 
              <Robot item={e} key={i} />
            )
          }
        </div>

      </div>
    </div>
  )
}

export default RobotList
