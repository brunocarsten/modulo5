// image imports
import image1 from '../assets/pergunta 1.jpg'
import image2 from '../assets/pergunta 2.jpg'
import image3 from '../assets/pergunta 3.jpg'
import image4 from '../assets/pergunta 4.jpg'
import image5 from '../assets/pergunta 5.jpg'
import image6 from '../assets/pergunta 6.jpg'
import image7 from '../assets/pergunta 7.jpg'
import image8 from '../assets/pergunta 8.jpg'

// questions
export const questions = [
  {
    index: 0,
    title: 'PERGUNTA 1',
    question:
      'Sobre a observação e a escuta qualificadas, exigidas de profissionais do Programa Criança Feliz, é incorreto afirmar:',
    alternatives: [
      {
        correct: false,
        text: 'A escuta e a observação qualificadas exigem sensibilidade, atenção e respeito ao contexto de cada família.'
      },
      {
        correct: true,
        text: 'Você deve ser fiel ao seu procedimento-padrão para trabalhar as noções de cuidado, de afeto e de desenvolvimento da criança.'
      },
      {
        correct: false,
        text: 'Observar o que o povo ou a comunidade tradicional produzem, e o que eles têm para falar e suas diversas práticas pode ajudar a criar estratégias para as práticas diárias de um profissional do PCF.'
      },
      {
        correct: false,
        text: 'Ouvir as famílias com atenção, não questionar aspectos socioculturais, identificar as necessidades das famílias – por meio da observação e escuta dos detalhes – e não impor ou utilizar valores culturais pessoais são algumas dicas para um bom atendimento às famílias do PCF.'
      }
    ],
    label: 'Estudos prévios sobre a comunidade ou o povo a ser atendido',
    image: image1
  },
  {
    index: 1,
    title: 'PERGUNTA 2',
    question:
      'Sobre a preparação para dar início à implementação do Programa Criança Feliz em comunidades e povos tradicionais, é incorreto afirmar que:',
    alternatives: [
      {
        correct: true,
        text: 'É importante que a supervisão e os responsáveis pelas visitas domiciliares tenham tempo suficiente para estudar o grupo com o qual pretendem trabalhar, o que deve ser feito depois  de estabelecerem o contato inicial com a liderança.'
      },
      {
        correct: false,
        text: 'Com estudo, os profissionais do programa ganham mais confiança e segurança em relação às particularidades de cada comunidade, o que evita, constrangimentos ou erros na abordagem.'
      },
      {
        correct: false,
        text: 'Utilizar dados do CadÚnico, ler textos e estudos sobre o contexto daquele povo específico e buscar apoio de órgãos específicos relacionados àquele povo podem ser importantes fontes de informações.'
      },
      {
        correct: false,
        text: 'É fundamental criar uma ponte entre a importância do programa e os elementos de identificação contextuais para que as famílias se sintam confortáveis em relação à forma como irão participar do programa.'
      }
    ],
    label: 'Estudos de costumes, tradições e religião local',
    image: image2
  },
  {
    index: 2,
    title: 'PERGUNTA 3',
    question:
      'Para observação e escuta qualificada das famílias, a equipe técnica do PCF não deve adotar como conduta: ',
    alternatives: [
      {
        correct: true,
        text: 'Questionar aspectos socioculturais dos grupos atendidos. '
      },
      {
        correct: false,
        text: 'Valorizar e elogiar as práticas do contexto que já são realizadas pelas famílias para desenvolver as habilidades e competências das crianças. '
      },
      {
        correct: false,
        text: 'Não utilizar elementos de sua religião e de seus valores socioculturais em atividades com as famílias de outros grupos sociais. '
      },
      {
        correct: false,
        text: 'Não forçar a realização de atividades. '
      }
    ],
    label: 'Contato com o órgão público auxiliar',
    image: image3
  },
  {
    index: 3,
    title: 'PERGUNTA 4',
    question:
      'Sobre a abordagem inicial do Programa Criança Feliz em comunidades e povos tradicionais, é incorreto afirmar que:',
    alternatives: [
      {
        correct: false,
        text: 'A abordagem do PCF com as famílias tem início com a acolhida nos territórios, momento em que os beneficiários recebem informações sobre os objetivos, o funcionamento e a adesão ao programa.'
      },
      {
        correct: false,
        text: 'Em povos e comunidade tradicionais, o ideal é que essa etapa seja realizada em grupo, pois a lógica e a organização costumam ser coletivas.'
      },
      {
        correct: false,
        text: 'A liderança local é aquela pessoa que costuma ser respeitada localmente e que tem o poder de reunir os grupos para tratar de assuntos de interesse coletivo.'
      },
      {
        correct: true,
        text: 'O contato com essas lideranças é necessário apenas para que haja uma autorização de entrada no território, mas não é necessário dar seguimento com a liderança no desenvolvimento do programa.'
      }
    ],
    label: 'Contato com a liderança local',
    image: image4
  },
  {
    index: 4,
    title: 'PERGUNTA 5',
    question:
      'Sobre a abordagem inicial do Programa Criança Feliz em comunidades e povos tradicionais, é correto afirmar que:',
    alternatives: [
      {
        correct: false,
        text: 'A supervisão e os profissionais que realizarão as visitas domiciliares são apresentados às lideranças comunitárias e fornecem as informações sobre o programa. A partir daí, a comunidade é considerada aderida ao PCF.'
      },
      {
        correct: false,
        text: 'No processo de caracterização e diagnóstico das famílias, deve-se seguir fielmente o formulário, sem considerar outros aspectos culturais ou contextuais.'
      },
      {
        correct: true,
        text: 'Os profissionais do PCF devem estabelecer diálogo aberto e ambiente favorável para que as pessoas possam se autodeclarar sem receio de sofrer algum tipo de discriminação.'
      },
      {
        correct: false,
        text: 'O planejamento das visitas domiciliares deve ser flexível ao contexto, porém precisa manter o caráter domiciliar do programa.'
      }
    ],
    label: 'Reunião com a comunidade ou com o povo local',
    image: image5
  },
  {
    index: 5,
    title: 'PERGUNTA 6',
    question: 'Sobre o Programa Criança Feliz, é incorreto afirmar:',
    alternatives: [
      {
        correct: false,
        text: 'Comunidades e povos tradicionais fazem parte do cotidiano do PCF, sendo que ciganos, indígenas, quilombolas e terreiros tinham, em 2021, aproximadamente 50 mil famílias contempladas.'
      },
      {
        correct: true,
        text: 'O PCF participa do cotidiano das famílias atendidas, e suas atividades são desenvolvidas em centros comunitários.'
      },
      {
        correct: false,
        text: 'O desafio das equipes técnicas é garantir a universalidade dos direitos previstos no Marco Legal da Primeira Infância.'
      },
      {
        correct: false,
        text: 'O respeito às identidades e à autonomia dos grupos com os quais atua é prerrogativa básica do programa.'
      }
    ],
    label: 'Cadastro das famílias',
    image: image6
  },
  {
    index: 6,
    title: 'PERGUNTA 7',
    question:
      'Sobre o planejamento e a condução das atividades de profissionais do Programa Criança Feliz, é incorreto afirmar:',
    alternatives: [
      {
        correct: false,
        text: 'Cada contexto e cada realidade pode significar um planejamento diferente, com o uso de estratégias diferentes.'
      },
      {
        correct: true,
        text: 'As atividades de comunicação e brincadeiras devem ser preparadas em conjunto com a família, para que esta se aproprie do conteúdo do PCF.'
      },
      {
        correct: false,
        text: 'É importante estar preparado para lidar com as diferentes realidades e para adaptar o trabalho às condições e às especificidades dos grupos atendidos.'
      },
      {
        correct: false,
        text: 'As atividades são previamente preparadas e organizadas pelas visitadoras, com o suporte da supervisão, e levam em consideração: a fase de desenvolvimento das crianças, as habilidades que se esperam delas nesses períodos da vida e os caminhos para a construção de vínculos familiares.'
      }
    ],
    label: 'Atendimento às famílias',
    image: image7
  },
  {
    index: 7,
    title: 'PERGUNTA 8',
    question:
      'Criar um mapa, com perguntas e respostas sobre o povo e a comunidade atendida, pode se tornar importante referência para o planejamento e a realização das atividades. Assinale abaixo um ponto que não é considerado chave nesse processo.',
    alternatives: [
      {
        correct: false,
        text: 'Aprender sobre brincadeiras, cantos e contos do grupo atendido, assim como formas de brincar.'
      },
      {
        correct: true,
        text: 'Aprender a língua materna do povo ou da comunidade para que possa se comunicar adequadamente. '
      },
      {
        correct: false,
        text: 'Entender sobre os ritos de passagem realizados na infância.'
      },
      {
        correct: false,
        text: 'Aprender se existem estereótipos associados às crianças pertencentes à comunidade.'
      }
    ],
    label: 'Brincadeiras e atividades',
    image: image8
  }
]
