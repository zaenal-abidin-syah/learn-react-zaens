import React from 'react'

function TextImage() {
  const externalImage = "https://source.unsplash.com/1000x600?computer"
  return (
        <div className="max-w-xl mb-96 h-96 bg-slate-500 mx-auto overflow-y-scroll bg-fixed" style={{
            backgroundImage: `url(${externalImage})`
        }}>
          <p className="p-5 text-2xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. In, voluptates! Nostrum similique reiciendis est fugiat adipisci consequatur aperiam tenetur, provident incidunt cupiditate pariatur. Consequatur accusantium explicabo laudantium iusto, error ipsam beatae, illo quos totam odit eos ipsum nemo quibusdam fugiat accusamus culpa? Nulla delectus voluptatibus unde excepturi quae laboriosam accusamus maiores aspernatur suscipit rerum dolor cumque obcaecati, harum, assumenda id at dignissimos molestiae doloribus, asperiores aliquid? Voluptatem excepturi dolorem magni labore assumenda atque quia ullam nulla quas eos voluptas, ipsa eaque repellendus placeat obcaecati sequi saepe officia dolore esse porro? Exercitationem dolores quas eum, minus tenetur quisquam dolorem aspernatur laboriosam quia dignissimos molestiae debitis porro, nisi voluptatibus fugit voluptate totam adipisci in nemo amet? Quis sit sunt consequatur tempora ad! Totam, ab veniam. Est exercitationem totam officiis iste cum sequi provident nisi, natus consequatur. Iste nobis cumque consectetur eum ipsam libero commodi vitae. Ea fugit expedita sequi unde, quia dolorum quas. Dolor doloremque labore laudantium, inventore accusantium eius sed. Dolorum in non nostrum rem quisquam quibusdam vitae est numquam sit repellendus reprehenderit et, consectetur amet! Consectetur, nostrum. Placeat animi tempore neque, provident at asperiores blanditiis numquam, illum optio quae odit alias quam beatae enim culpa saepe maiores ducimus rerum excepturi!
          </p>
        </div>
  )
}

export default TextImage