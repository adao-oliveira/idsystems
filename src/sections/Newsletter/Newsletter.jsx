import './Newsletter.css'
import headerImg from '../../assets/newsletter.png'

const Newsletter = () => {
    return (
        <>
            {/* <section id="newsletter">
        <div className="container newsletter__container">
          <div className="newsletter__left">
            <div className="newsletter__portrait">
              <img src="https://res.cloudinary.com/robles-identity/image/upload/v1686434827/56323078-08D4-4EF9-B138-1F135291A4FA_o6lqo0.png" alt="About Image" />
            </div>
            <h2>Assine a nossa newsletter<br />e não perca as atualizações mais recentes</h2>
          </div>

          <div className="newsletter__right">
            <div className="newsletter__cards">
              <script src="https://f.convertkit.com/ckjs/ck.5.js"></script>
              <form
                action="https://app.convertkit.com/forms/5250538/subscriptions"
                className="seva-form formkit-form"
                method="post"
                data-sv-form={5250538}
                data-uid="a3647326f1"
                data-format="inline"
                data-version={5}
                data-options='{"settings":{"after_subscribe":{"action":"message","success_message":"Sucesso! Agora fique sempre de olho em sua caixa de entrada para não perder novidades e promoções que disponibilizaremos para você.","redirect_url":""},"analytics":{"google":null,"fathom":null,"facebook":null,"segment":null,"pinterest":null,"sparkloop":null,"googletagmanager":null},"modal":{"trigger":"timer","scroll_percentage":null,"timer":5,"devices":"all","show_once_every":15},"powered_by":{"show":true,"url":"https://convertkit.com/features/forms?utm_campaign=poweredby&utm_content=form&utm_medium=referral&utm_source=dynamic"},"recaptcha":{"enabled":false},"return_visitor":{"action":"show","custom_content":""},"slide_in":{"display_in":"bottom_right","trigger":"timer","scroll_percentage":null,"timer":5,"devices":"all","show_once_every":15},"sticky_bar":{"display_in":"top","trigger":"timer","scroll_percentage":null,"timer":5,"devices":"all","show_once_every":15}},"version":"5"}'
                min-width="400 500 600 700 800"
              >
                <input type="text" placeholder="Primeiro nome" name="fields[first_name]" required />
                <input type="text" placeholder="Segundo nome" name="fields[last_name]" required />
                <input type="email" placeholder="Seu melhor E-mail" name="email_address" required />
                <button data-element="submit" className="BtnAnimationConnect">
                  <div class="formkit-spinner">
                    <div></div>
                    <div></div>
                    <div></div>
                  </div>
                  <span className="TxtAnimationConnect">Me inscrever</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section> */}
            <div class="newsletter__back overflow-x-hidden lg:overflow-x-auto lg:overflow-hidden flex items-center justify-center">
                <div class="newsletter__container container w-full lg:w-4/5 lg:border border-gray-300 rounded-lg flex flex-wrap lg:flex-nowrap flex-col lg:flex-row justify-between group">
                    <div class="w-full lg:w-1/2 h-28 lg:h-[750px] mt-32 lg:mt-0 lg:bg-theme-yellow-dark flex relative order-2 lg:order-1">
                        <div class="text-center items-center justify-start h-full w-full">
                            <span class="primary text-center transform block whitespace-nowrap mt-10 text-[20px] font-black uppercase transition-all group-hover:opacity-100 ml-10 2xl:ml-12 group-hover:-ml-20 2xl:group-hover:ml-26 lg:group-hover:ml-20 duration-1000 lg:duration-700 ease-in-out">
                                Assine nossa Newsletter <br />e não perca as atualizações mais recentes
                            </span>
                        </div>
                        <div class="product absolute right-0 bottom-0 flex items-center lg:justify-center w-full opacity-50 lg:opacity-100">
                            <img src={headerImg} alt="product" class="-mb-5 lg:mb-0 -ml-12 lg:ml-0 product h-[500px] xl:h-[500px] 2xl:h-[600px] w-auto object-cover transform group-hover:translate-x-26 2xl:group-hover:translate-x-48 transition-all duration-1000 lg:duration-700 ease-in-out" />
                            <div class="shadow w-full h-5 bg-black bg-opacity-25 filter blur absolute bottom-0 lg:bottom-14 left-0 lg:left-24 rounded-full transform skew-x-10"></div>
                        </div>
                        <div class="hidden lg:block w-1/3 bg-white ml-auto"></div>
                    </div>

                    {/* <!-- Login Form --> */}
                    <div class="w-full lg:w-1/2 order-1 lg:order-2">
                        <div class="form-wrapper flex items-center lg:h-full px-5 relative z-10 pt-16 lg:pt-0">
                            <div class="w-full space-y-5">

                            <span class="primary text-center transform block text-[20px] font-black uppercase transition-all lg:group-hover:ml-20 duration-1000 lg:duration-700 ease-in-out">
                                Assine nossa Newsletter <br />e não perca as atualizações mais recentes
                            </span>

                                <div class="form-element">
                                    <label class="space-y-2 w-full lg:w-4/5 block mx-auto">
                                        <span class="block text-lg text-gray-800 tracking-wide">Primeiro nome</span>
                                        <span class="block">
                                            <input type="text" class="bg-yellow-100 lg:bg-white border lg:border-2 border-gray-400 lg:border-gray-200 w-full p-3 focus:outline-none active:outline-none focus:border-gray-400 active:border-gray-400" />
                                        </span>
                                    </label>
                                </div>

                                <div class="form-element">
                                    <label class="space-y-2 w-full lg:w-4/5 block mx-auto">
                                        <span class="block text-lg text-gray-800 tracking-wide">Segundo nome</span>
                                        <span class="block">
                                            <input type="text" class="bg-yellow-100 lg:bg-white border lg:border-2 border-gray-400 lg:border-gray-200 w-full p-3 focus:outline-none active:outline-none focus:border-gray-400 active:border-gray-400" />
                                        </span>
                                    </label>
                                </div>

                                <div class="form-element">
                                    <label class="space-y-2 w-full lg:w-4/5 block mx-auto">
                                        <span class="block text-lg text-gray-800 tracking-wide">Seu melhor E-mail</span>
                                        <span class="block">
                                            <input type="email" class="bg-yellow-100 lg:bg-white border lg:border-2 border-gray-400 lg:border-gray-200 w-full p-3 focus:outline-none active:outline-none focus:border-gray-400 active:border-gray-400" />
                                        </span>
                                    </label>
                                </div>

                                <button data-element="submit" className="form-element w-full lg:w-4/5 block mx-auto BtnAnimationConnect">
                                    <span className="TxtAnimationConnect">Me inscrever</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Newsletter