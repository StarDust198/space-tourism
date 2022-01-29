export default function Design() {
    return (
        <div className="App">
            <div className="container flow" style={{ '--flow-space': '4rem' }}>
                <h1 className="ff-sans-cond uppercase fs-500">Design system</h1>

                <section id="colors" className="flow">
                    <h2 className="numbered-title"><span>01</span>colors</h2>

                    <div className="flex" style={{ '--flow-space': '2rem' }}>
                        <div className="flow" style={{ 'flexGrow': 1 }}>
                            <div className="bg-dark text-white ff-serif fs-500" style={{ 'padding': '3rem 1rem 1rem', 'border': '1px solid #616476' }}>
                                #0B0D17
                            </div>
                            <p><span className="text-light" style={{ 'paddingRight': '2.5rem' }}>RGB</span> 11, 13, 23</p>
                            <p style={{ '--flow-space': '.5rem' }}><span className="text-light" style={{ 'paddingRight': '2.5rem' }}>HSL</span> 230°, 35%, 7%</p>
                        </div>
                        <div className="flow" style={{ 'flexGrow': 1 }}>
                            <div className="bg-light text-dark ff-serif fs-500" style={{ 'padding': '3rem 1rem 1rem', 'border': '1px solid #616476' }}>
                                #D0D6F9
                            </div>
                            <p><span className="text-light" style={{ 'paddingRight': '2.5rem' }}>RGB</span> 208, 214, 249</p>
                            <p style={{ '--flow-space': '.5rem' }}><span className="text-light" style={{ 'paddingRight': '2.5rem' }}>HSL</span> 231°, 77%, 90%</p>
                        </div>
                        <div className="flow" style={{ 'flexGrow': 1 }}>
                            <div className="bg-white text-dark ff-serif fs-500" style={{ 'padding': '3rem 1rem 1rem', 'border': '1px solid #616476' }}>
                                #FFFFFF
                            </div>
                            <p><span className="text-light" style={{ 'paddingRight': '2.5rem' }}>RGB</span> 255,255,255</p>
                            <p style={{ '--flow-space': '.5rem' }}><span className="text-light" style={{ 'paddingRight': '2.5rem' }}>HSL</span> 0°, 0%, 100%</p>
                        </div>
                    </div>
                </section>

                <section id="typography" className="flow">
                    <h2 className="numbered-title"><span>02</span>Typography</h2>
                    <div className="flex" style={{ '--flow-space': '2rem' }}>
                        <div className="flow" style={{ 'flexBasis': '100%' }}>
                            <div>
                                <p className="text-light">Heading 1 - Bellefair Regular - 150px</p>
                                <p className="fs-900 uppercase ff-serif">Earth</p>
                            </div>
                            <div>
                                <p className="text-light">Heading 2 - Bellefair Regular - 100px</p>
                                <p className="fs-800 uppercase ff-serif">Venus</p>
                            </div>
                            <div>
                                <p className="text-light">Heading 3 - Bellefair Regular - 56px</p>
                                <p className="fs-700 uppercase ff-serif">Jupiter & Saturn</p>
                            </div>
                            <div>
                                <p className="text-light">Heading 4 - Bellefair Regular - 32px</p>
                                <p className="fs-600 uppercase ff-serif">Uranus, Neptune, & Pluto</p>
                            </div>
                            <div>
                                <p className="text-light">Heading 5 - Barlow Condensed Regular - 28px - 4.75 Character Space</p>
                                <p className="fs-500 uppercase ff-sans-cond text-light letter-spacing-1">So, you want to travel to space</p>
                            </div>

                        </div>

                        <div className="flow" style={{ 'flexBasis': '100%' }}>
                            <div>
                                <p className="text-light">Subheading 1 - Bellefair Regular - 28px</p>
                                <p className="fs-500 ff-serif uppercase">384,400 km</p>
                            </div>
                            <div>
                                <p className="text-light">Subheading 2 - Barlow Condensed Regular - 14px - 2.35 Character Space</p>
                                <p className="fs-200 uppercase ff-sans-cond letter-spacing-3">Avg. Distance</p>
                            </div>
                            <div>
                                <p className="text-light">Nav Text - Barlow Condensed Regular - 16px - 2.7 Character Space</p>
                                <p className="fs-300 uppercase ff-sans-cond letter-spacing-2">Europa</p>
                            </div>
                            <div>
                                <p className="text-light">Body Text</p>
                                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id, mattis vel, nisi. Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti.Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id, mattis vel, nisi. Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti.Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id, mattis vel, nisi. </p>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="interactive-elements" className="flow">
                    <h2 className="numbered-title"><span>03</span> Interactive elements</h2>

                    <div>
                        <nav>
                            <ul className="primary-navigation underline-indicators flex">
                                <li className="active"><a className="ff-sans-cond letter-spacing-2 fs-300 uppercase text-white" href="/"><span>00</span> Active</a></li>
                                <li><a className="ff-sans-cond letter-spacing-2 fs-300 uppercase text-white" href="/"><span>01</span> Hovered</a></li>
                                <li><a className="ff-sans-cond letter-spacing-2 fs-300 uppercase text-white" href="/"><span>02</span> Idle</a></li>
                            </ul>
                        </nav>
                    </div>

                    <div className="flex" style={{ 'gap': '10rem' }}>
                        <div style={{ 'marginTop': '5rem' }}>
                            <a href="/" className="large-button bg-white text-dark uppercase ff-serif fs-600">Explore</a>
                        </div>

                        <div className="flow" style={{ 'marginBottom': '50vh', '--flow-space': '4rem' }}>

                            <div className="tab-list underline-indicators flex ff-sans-cond fs-300">
                                <button role="tab" aria-selected="true" className="text-light letter-spacing-2 bg-dark uppercase">Moon</button>
                                <button role="tab" aria-selected="false" className="text-light letter-spacing-2 bg-dark uppercase">Mars</button>
                                <button role="tab" aria-selected="false" className="text-light letter-spacing-2 bg-dark uppercase">Europa</button>
                            </div>

                            <div className="dot-indicators flex">
                                <button role="tab" aria-selected="true"><span className="sr-only">Slide-title</span></button>
                                <button role="tab" aria-selected="false"><span className="sr-only">Slide-title</span></button>
                                <button role="tab" aria-selected="false"><span className="sr-only">Slide-title</span></button>
                            </div>

                            <div className="number-indicators flow" style={{ '--flow-space': '2rem' }}>
                                <button role="tab" aria-selected="true" className="fs-600"><span className="sr-only">Slide</span> 1</button>
                                <button role="tab" aria-selected="false" className="fs-600"><span className="sr-only">Slide</span> 2</button>
                                <button role="tab" aria-selected="false" className="fs-600"><span className="sr-only">Slide</span> 3</button>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}
  

  