import { useRouter } from "next/router";
import { useEffect, useState } from "react";

function Index(props) {
  const id = 120;
  const router = useRouter();
  const [field4Value, setField4Value] = useState("");
  const [field6Value, setField6Value] = useState("");
  const [field7Value, setField7Value] = useState("");
  const [field8Value, setField8Value] = useState("");
  const [field9Value, setField9Value] = useState("");
  const [field10Value, setField10Value] = useState("");

  useEffect(() => {
    setField4Value(window.location.href || "");
    const urlParams = new URLSearchParams(router.asPath.split("?")[1]);
    setField6Value(urlParams.get("utm_source") || "");
    setField7Value(urlParams.get("utm_campaign") || "");
    setField8Value(urlParams.get("utm_medium") || "");
    setField9Value(urlParams.get("utm_content") || "");
    setField10Value(urlParams.get("utm_term") || "");
  }, [router.asPath]);

  return (
    <form
      method="POST"
      action="https://mulheresbemresolvidas.activehosted.com/proc.php"
      id="_form_120"
      className="_form _form_120 _inline-form _dark mt-4 lg:mt-0 mx-auto lg:mx-0 max-w-[360px] lg:max-w-[550px] w-full font-['poppins']"
    >
      <input type="hidden" name="u" value={`${id}`} />
      <input type="hidden" name="f" value={`${id}`} />
      <input type="hidden" name="s" />
      <input type="hidden" name="c" value="0" />
      <input type="hidden" name="m" value="0" />
      <input type="hidden" name="act" value="sub" />
      <input type="hidden" name="v" value="2" />
      <input type="hidden" name="or" value="54848414c022a2d0a6137bef0df486ae" />
      <div className="_form-content">
        <div className="flex  justify-between mt-[10px] lg:flex-row flex-col">
        <div className="_form_element _x46692742 _full_width">
          <div className="_field-wrapper">
            <input
              className="rounded-lg w-full px-3 py-2 text-center text-[#585858] text-[16px] lg:text-[20px]"
              type="text"
              id="name"
              name="name"
              placeholder="Digite seu nome"
              required
            />
          </div>
        </div>

        <div className="_form_element _x66790635 _full_width mt-[5px]  lg:mt-[0]">
          <div className="_field-wrapper">
            <input
              className="rounded-lg w-full px-3 py-2 text-center text-[#585858] text-[16px] lg:text-[20px]"
              type="text"
              id="email"
              name="email"
              placeholder="Digite aqui seu e-mail"
              required
            />
          </div>
        </div>
        </div>

        <div className="_form_element _x00515031 _full_width mt-[5px]">
          <div className="_field-wrapper">
            <input
              className="rounded-lg w-full px-2 py-2 text-center text-[#585858] text-[16px] lg:text-[20px]"
              type="text"
              id="phone"
              name="phone"
              placeholder="Qual seu Whatsapp?"
              
            />
          </div>
        </div>


        <div className="_form_element text-[#585858] _x55599658 _full_width">
          <input
            type="hidden"
            name="field[524]"
            value={field4Value}
            onChange={(e) => setField4Value(e.target.value)}
          />
        </div>
        <div className="_form_element  text-[#585858]  _x26420529 _full_width">
          <input
            type="hidden"
            name="field[519]"
            value={field6Value}
            onChange={(e) => setField6Value(e.target.value)}
          />
        </div>
        <div className="_form_element  text-[#585858] _x49841952 _full_width">
          <input
            type="hidden"
            name="field[520]"
            value={field7Value}
            onChange={(e) => setField7Value(e.target.value)}
          />
        </div>
        <div className="_form_element  text-[#585858] _x15074434 _full_width">
          <input
            type="hidden"
            name="field[521]"
            value={field8Value}
            onChange={(e) => setField8Value(e.target.value)}
          />
        </div>
        <div className="_form_element  text-[#585858] _x04042756 _full_width">
          <input
            type="hidden"
            name="field[522]"
            value={field9Value}
            onChange={(e) => setField9Value(e.target.value)}
          />
        </div>
        <div className="_form_element  text-[#585858] _x22291204 _full_width">
          <input
            type="hidden"
            name="field[523]"
            value={field10Value}
            onChange={(e) => setField10Value(e.target.value)}
          />
        </div>
        <div className="_button-wrapper _full_width">
          <button
            id="_form_120_submit"
            className="_submit font-['montserrat'] rounded-lg bg-[#28AA4C] text-[13px] lg:text-[18px] hover:scale-105 duration-150 w-full text-center mt-[9px] xl:mt-[5px] py-2 lg:py-2 font-semibold lg:font-bold text-white tracking-[1px] lg:tracking-[2px]"
            type="submit"
          >
            <span> Quero ser bem resolvida</span>
          </button>
        </div>
        <div className="_clear-element"></div>
      </div>
    </form>
  );
}

export default Index;