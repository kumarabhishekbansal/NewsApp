import React from 'react'

const Faq = () => {




const clickme=()=>{
    const p1=document.getElementById("p1");
    const p2=document.getElementById("p2");
    const p3=document.getElementById("p3");
    const p4=document.getElementById("p4");
    
    const s1=document.getElementById("s1");
    const s2=document.getElementById("s2");
    const s3=document.getElementById("s3");
    const s4=document.getElementById("s4");
    
    const d1=document.getElementById("d1");
    const d2=document.getElementById("d2");
    const d3=document.getElementById("d3");
    const d4=document.getElementById("d4");
    
    p1.addEventListener("click",()=>{
        console.log("clicked");
        s1.classList.toggle("s1s2s3s4");
        d1.classList.toggle("d");
    })
    
    p2.addEventListener("click",()=>{
        console.log("clicked");
        s2.classList.toggle("s1s2s3s4");
        d2.classList.toggle("d");
    })
    
    p3.addEventListener("click",()=>{
        console.log("clicked");
        s3.classList.toggle("s1s2s3s4");
        d3.classList.toggle("d");
    })
    
    p4.addEventListener("click",()=>{
        console.log("clicked");
        s4.classList.toggle("s1s2s3s4");
        d4.classList.toggle("d");
    })
}

  return (
    <>
        
    <div className="faqparent d-flex flex-column align-items-center w-100 my-5" id="FAQS" onClick={clickme}>
        <h1 className="text-center"> Frequently Asked Questions </h1>

        {/* <!-- 1 --> */}

        <div className="quesol d-flex flex-column align-items-center my-5" id="d1">
            <div className="titlefaq">
                <h2 className="faqh">What is news simple words?</h2>
                <i className="fa-regular fa-square-plus icons" id="p1"></i>
            </div>

            <div className="solfaq fw-bold my-5" id="s1">
                <ul className="ps">
                    <li>A report of recent events or unknown information I have good news! We won! </li>
                    <li>Information or recent events reported in a newspaper or magazine or on a broadcast. </li>
                    <li>A broadcast of information on recent events We saw pictures of a flood on the evening news.</li>
                    <li>An event that is interesting enough to be reported</li>
                    <li>December 17, 2019. ANSWER. You want to know the meaning of NEWS acronym. The abbreviation NEWS
                        stands for “Notable Events, Weather and Sports”. Apart from the above, News has been defined by
                        various authors and Journalistic scholars of Mass communication.</li>
                </ul>
            </div>
        </div>

        {/* <!-- 2 --> */}


        <div className="quesol d-flex flex-column align-items-center my-5" id="d2">
            <div className="titlefaq">
                <h2 className="faqh">Rise of the newspaper?</h2>
                <i className="fa-regular fa-square-plus icons" id="p2"></i>
            </div>

            <div className="solfaq fw-bold my-5" id="s2">
                <p className="ps">
                    The spread of paper and the printing press from China to Europe preceded a major advance in the
                    transmission of news.[82] With the spread of printing presses and the creation of new markets in the
                    1500s, news underwent a shift from factual and precise economic reporting, to a more emotive and
                    freewheeling format. (Private newsletters containing important intelligence therefore remained in
                    use by people who needed to know.)[83] The first newspapers emerged in Germany in the early
                    1600s.[84] Relation aller Fürnemmen und gedenckwürdigen Historien, from 1605, is recognized as the
                    world's first formalized 'newspaper';[85] while not a 'newspaper' in the modern sense, the Ancient
                    Roman Acta Diurna served a similar purpose circa 131 BC.
                </p>
            </div>
        </div>



        {/* <!-- 3 --> */}

        <div className="quesol d-flex flex-column align-items-center my-5" id="d3">
            <div className="titlefaq">
                <h2 className="faqh">Online journalism?</h2>
                <i className="fa-regular fa-square-plus icons" id="p3"></i>
            </div>

            <div className="solfaq fw-bold my-5" id="s3">
                <p className="ps">
                    Online journalism is news that is reported on the internet. News can be delivered more quickly
                    through this method of news as well as accessed more easily. The internet era has transformed the
                    understanding of news. Because the internet allows communication which is not only instantaneous,
                    but also bi- or multi-directional, it has blurred the boundaries of who is a legitimate news
                    producer. A common type of internet journalism is called blogging, which is a service of
                    persistently written articles uploaded and written by one or more individuals. Millions of people in
                    countries such as the United States and South Korea have taken up blogging. Many blogs have rather
                    small audiences; some blogs are read by millions each month.[175] Social media sites, especially
                    Twitter and Facebook, have become an important source of breaking news information and for
                    disseminating links to news websites. Twitter declared in 2012: "It's like being delivered a
                    newspaper whose headlines you'll always find interesting—you can discover news as it's happening,
                    learn more about topics that are important to you, and get the inside scoop in real time."[176] Cell
                    phone cameras have normalized citizen photojournalism.
                </p>
            </div>
        </div>

        {/* <!-- 4 --> */}


        <div className="quesol d-flex flex-column align-items-center my-5" id="d4">
            <div className="titlefaq">
                <h2 className="faqh">News media today?</h2>
                <i className="fa-regular fa-square-plus icons" id="p4"></i>
            </div>

            <div className="solfaq fw-bold my-5" id="s4">
                <p className="ps">
                    News can travel through different communication media.[17] In modern times, printed news had to be
                    phoned into a newsroom or brought there by a reporter, where it was typed and either transmitted
                    over wire services or edited and manually set in type along with other news stories for a specific
                    edition. Today, the term "breaking news" has become trite as commercial broadcasting United States
                    cable news services that are available 24 hours a day use live communications satellite technology
                    to bring current events into consumers' homes as the event occurs. Events that used to take hours or
                    days to become common knowledge in towns or in nations are fed instantaneously to consumers via
                    radio, television, mobile phone, and the internet.

                    Speed of news transmission, of course, still varies wildly on the basis of where and how one lives
                </p>
            </div>
        </div>
    </div>
    </>
  )
}

export default Faq