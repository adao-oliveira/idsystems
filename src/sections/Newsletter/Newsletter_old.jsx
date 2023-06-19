import './Newsletter.css'

const Newsletter = () => {
  return (
    <>
      <section id="newsletter">
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
      </section>
    </>
  )
}
export default Newsletter