import React from "react";

import { Canvas, Edge, } from "reaflow";




const MemoizedGraph = function Layout(){
    const nodes=[{"id":"1","text":[["squadName","Super hero squad"],["homeTown","Metro City"],["formed",2016],["secretBase","Super tower"],["active",true]],"width":251,"height":108,"data":{"isParent":false,"hasChild":false}},{"id":"19","text":"members","width":151,"height":40,"data":{"isParent":true,"hasChild":true}},{"id":"2","text":[["name","Molecule Man"],["age",29],["secretIdentity","Dan Jukes"]],"width":235,"height":72,"data":{"isParent":false,"hasChild":false}},{"id":"6","text":"powers","width":143,"height":40,"data":{"isParent":true,"hasChild":true}},{"id":"3","text":"Radiation resistance","width":195,"height":40,"data":{"isParent":false,"hasChild":false}},{"id":"4","text":"Turning tiny","width":131,"height":40,"data":{"isParent":false,"hasChild":false}},{"id":"5","text":"Radiation blast","width":155,"height":40,"data":{"isParent":false,"hasChild":false}},{"id":"7","text":[["name","Madame Uppercut"],["age",39],["secretIdentity","Jane Wilson"]],"width":251,"height":72,"data":{"isParent":false,"hasChild":false}},{"id":"11","text":"powers","width":143,"height":40,"data":{"isParent":true,"hasChild":true}},{"id":"8","text":"Million tonne punch","width":187,"height":40,"data":{"isParent":false,"hasChild":false}},{"id":"9","text":"Damage resistance","width":171,"height":40,"data":{"isParent":false,"hasChild":false}},{"id":"10","text":"Superhuman reflexes","width":187,"height":40,"data":{"isParent":false,"hasChild":false}},{"id":"12","text":[["name","Eternal Flame"],["age",1000000],["secretIdentity","Unknown"]],"width":219,"height":72,"data":{"isParent":false,"hasChild":false}},{"id":"18","text":"powers","width":143,"height":40,"data":{"isParent":true,"hasChild":true}},{"id":"13","text":"Immortality","width":123,"height":40,"data":{"isParent":false,"hasChild":false}},{"id":"14","text":"Heat Immunity","width":139,"height":40,"data":{"isParent":false,"hasChild":false}},{"id":"15","text":"Inferno","width":91,"height":40,"data":{"isParent":false,"hasChild":false}},{"id":"16","text":"Teleportation","width":139,"height":40,"data":{"isParent":false,"hasChild":false}},{"id":"17","text":"Interdimensional travel","width":219,"height":40,"data":{"isParent":false,"hasChild":false}}]
    const edges=[
        { id: 'e1-19', from: '1', to: '19' },
        { id: 'e19-2', from: '19', to: '2' },
        { id: 'e19-7', from: '19', to: '7' },
        { id: 'e19-12', from: '19', to: '12' },
        { id: 'e2-6', from: '2', to: '6' },
        { id: 'e6-3', from: '6', to: '3' },
        { id: 'e6-4', from: '6', to: '4' },
        { id: 'e6-5', from: '6', to: '5' },
        { id: 'e7-11', from: '7', to: '11' },
        { id: 'e11-8', from: '11', to: '8' },
        { id: 'e11-9', from: '11', to: '9' },
        { id: 'e11-10', from: '11', to: '10' },
        { id: 'e12-18', from: '12', to: '18' },
        { id: 'e18-13', from: '18', to: '13' },
        { id: 'e18-14', from: '18', to: '14' },
        { id: 'e18-15', from: '18', to: '15' },
        { id: 'e18-16', from: '18', to: '16' },
        { id: 'e18-17', from: '18', to: '17' }
      ]

  return (
  
          <Canvas
            nodes={nodes}
            edges={edges}
            zoomable={false}
            animated={false}
            readonly={true}
            dragEdge={null}
            dragNode={null}
            fit={true}
            // edge={(props) => (
            //   <Edge {...props} containerClassName={`edge-${props.id}`} />
            // )}
          />
     
  )
}

export default MemoizedGraph