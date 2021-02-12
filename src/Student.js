import React from 'react'

// const Student = ({ filteredData }) => {
//   return (
//     <main>
//       {filteredData.map(({ id, skills, course, people }) => (
//         <article className="cards-container" key={id}>
//           <div className="cards">
//             <h2>{skills}</h2>
//             <h6>{course}</h6>
//           </div>
//         </article>
//       ))}
//     </main>
//   );
// };

const Student = ({ filteredData }) => {
  return (
    <>
      {filteredData.map((item) => {
        const { id, skills, course } = item
        return (
          <article key={id}>
            <div className="cards">
              <h2>{skills}</h2>
              <h6>{course}</h6>
            </div>
          </article>
        )
      })}
    </>
  )
}

export default Student
