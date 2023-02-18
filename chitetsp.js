

fetch( "http://localhost:3000/users" )
  .then( res => res.json() )
  .then( ( data ) =>
  {
    const list = document.querySelector( '#list' )
    data.map( ( item ) =>
    {
      list.innerHTML += `
              <div class="w-[400px]">
                  <div class="mt-2">
                        <img  src="${ item.image }"
                            width="480px" height="480px" alt="">
                    </div>
                    <div class="mx-4">
                        <h3 class="font-bold text-[30px] ">${ item.name }</h3>
                        <div class="my-3">
                            <span class=" bg-[#142850] text-[#FFFFFF] rounded-xl px-2 w-[62px] text-[18px] ">${ item.nam }</span>
                            <span class="text-[#8695A4] pl-2">Dashboard</span>
                        </div>
                        <p class="text-[16px] pb-2">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
                            sint.
                            Velit
                            officia consequat
                            duis enim velit
                            mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                    </div>
                    <div class="w-full py-2 text-center bg-gray-200 dark:bg-slate-600"><a href ="">View in github</a></div>
                </div >
      `
    }


    );
  }

  )




