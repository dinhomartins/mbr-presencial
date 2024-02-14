





import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';

const AccordionItem = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="accordion-item mb-4 border-b-2 lg:pb-[20px]  border-[#DC8F60] font-['Libre Caslon Text']">
      <div className="flex justify-between items-center">
        <button className="accordion-title text-[18px] text-left pb-[10px] font-bold lg:text-[22px] lg:text-[24px]" onClick={toggleAccordion}>
          {title}
        </button>
        <FontAwesomeIcon
          icon={faAngleDown}
          className={`text-[18px] transition-transform transform ${isOpen ? 'rotate-180' : ''}`}
          onClick={toggleAccordion}
        />
      </div>
      {isOpen && <div className="accordion-content text-[18px] pb-[20px] text-[#fff]">{content}</div>}
    </div>
  );
};

const Accordion = () => {
  return (
    <div className="accordion max-w-[1179px] w-full mx-auto ">
      <AccordionItem title="01 - O que é o Bem-Resolvida?" content="O Bem-Resolvida é um evento presencial que vai acontecer nos dia 03, 04 e 05 de maio em Brasília - DF. Além de palestras e rodas de conversa, você vai encontrar mulheres que optaram por seguir pelo mesmo caminho de liberdade, seja financeiro, emocional ou pessoal. Nesse evento, você vai conhecer histórias e descobrir exatamente o que é necessário para ser uma mulher bem-resolvida em todas as áreas da sua vida." />
      {/* Adicione os demais itens do acordeão aqui, se necessário */}
      <AccordionItem title="02 - Posso comprar apenas um dia de evento?" content="Não temos essa opção disponível, cada ingresso dá acesso aos 3 dias de evento." />
      <AccordionItem title="03 - Posso comprar mais de um ingresso?" content="Pode sim, mas após a compra é necessário que você preencha certinho o nome da participante de cada ingresso." />
      <AccordionItem title="04 - Meu ingresso dá acesso a todos os dias?" content="Sim, todos os ingressos dão acesso aos 3 dias de evento." />
      <AccordionItem title="05 - Terá algum Kit da Aluna? O que vem nele?" content=<>
      <p>Tem sim, um kit lindo que preparei com todo amor e carinho para as minhas alunas!
      Nele você vai encontrar:<br></br><br></br>Uma bolsa personalizada, que você usará para guardar seus materiais de anotações durante as aulas, mas poderá perfeitamente usar em outras ocasiões. Inclusive, você vai fazer questão de usar de novo, porque ela é linda demais!
<br></br><br></br>Bloco de nota e caneta para você anotar  decisões, metas, objetivos, prazos e atividades definidas ao longo do evento, para você levar para a vida!
<br></br><br></br>Um super-brinde secreto que só quem participar do encontro descobrirá o que é!
      </p>
    </> 
    
    />
      <AccordionItem title="06 - Homens podem participar?" content="Não, o encontro Bem Resolvida é exclusivo para mulheres
" />
      <AccordionItem title="07 - Onde será o evento?" content=<> Será na capital nacional: Brasília, situada no Distrito Federal.
<br></br><br></br>
Ocorrerá no Quality Hotel SMAS - Setor de Múltiplas Atividades Sul, Trecho 3 Conjunto 2 Bloco A - Asa Sul, Brasília - DF, 71215-300
</> />
      <AccordionItem title="08 - Quais serão os dias e horários?" content="O encontro ocorre nos dias 03, 04 e 05 de maio. No dia 03 inicia às 08h, para credenciamento. Nos demais dias inicia às 09h e todos os dias encerra  às  20h30." />
      <AccordionItem title="09 - Como funciona o Credenciamento?" content="O credenciamento será presencial, no dia 03 de maio, às 08h. Na ocasião você receberá o crachá, que servirá como credencial de entrada nos demais dias do evento." />
      <AccordionItem title="10 - Como será a alimentação no dia do evento?" content="As alunas que optarem pelo plano Ouro ou Diamnond, terão acesso a coffe break liberado ao longo do evento. As que optarem pelo plano Prata, poderão levar lanchinhos ou comprar no serviço de café do hotel." />
      <AccordionItem title="11 - Tem estacionamento conveniado?" content=<>Sim, as alunas poderão contar com desconto especial no estacionamento conveniado, que fica no endereço abaixo (exatamente em frente ao Hotel):
<br></br><br></br>
Rua XYZ, nº XXX - Bairro XPTO - Brasília - DF</> />
      <AccordionItem title="12 - Como funciona o uso de imagem?" content=<>Durante o credenciamento, você será convidada a assinar um termo de autorização de uso de imagem, caso queira aparecer nas filmagens do evento que serão usadas futuramente.
<br></br><br></br>
Caso não queira aparecer, não tem problema: basta neste momento informar à equipe e você ficará alocada em um ambiente que não será filmado.
</> />
    </div>
  );
};

export default Accordion;

