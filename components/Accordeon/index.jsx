import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';

const AccordionItem = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="accordion-item mb-4 border-b-2 lg:pb-[20px]  border-[#DC8F60] font-['Libre Caslon Text']">
      <div className="flex justify-between items-center">
        <button className="accordion-title text-[18px] text-left pb-[10px] lg:text-[22px] lg:text-[28px]" onClick={() => setIsOpen(!isOpen)}>
          {title}
        </button>
        <FontAwesomeIcon icon={faAngleDown} className={`text-[18px] transition-transform transform ${isOpen ? 'rotate-180' : ''}`} />
      </div>
      {isOpen && <div className="accordion-content text-[18px] pb-[20px] text-[#A7A0A0]">{content}</div>}
    </div>
  );
};

const Accordion = () => {
  return (
    <div className="accordion max-w-[1179px] w-full mx-auto ">
      <AccordionItem title="01 - O que é o Bem-Resolvida?" content="O Bem-Resolvida é um evento presencial que vai acontecer nos dia 03, 04 e 05 de maio em Brasília - DF. Além de palestras e rodas de conversa, você vai encontrar mulheres que optaram por seguir pelo mesmo caminho de liberdade, seja financeiro, emocional ou pessoal. Nesse evento, você vai conhecer histórias e descobrir exatamente o que é necessário para ser uma mulher bem-resolvida em todas as áreas da sua vida." />
      <AccordionItem title="02 - Posso comprar apenas um dia de evento?" content="Não temos essa opção disponível, cada ingresso dá acesso aos 3 dias de evento." />
      <AccordionItem title="03 - Posso comprar mais de um ingresso?" content="Pode sim, mas após a compra é necessário que você preencha certinho o nome da participante de cada ingresso." />
      <AccordionItem title="04 - Meu ingresso dá acesso a todos os dias?" content="Sim, todos os ingressos dão acesso aos 3 dias de evento." />
    </div>
  );
};

export default Accordion;
