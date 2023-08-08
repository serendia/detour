var showPurpose = true; // use showPurpose = true to show "Divine Purpose" number
var myNumbers = {};
var dest, char;
const meaning = {
	"master": "Número Mestre",
	"destiny": {
		"title": "Destino",
		"description": "Este número exerce uma influência extraordinária nas suas motivações pessoais, nas suas preferências em relação a pessoas e ambientes, bem como, nas carreiras que provavelmente ambiciona seguir. É uma força interior que o impulsiona em direção a certas escolhas e caminhos, moldando a sua jornada de vida de formas profundas e surpreendentes. Através deste número, descobre-se uma parte essencial do seu ser, as suas paixões e os campos profissionais onde encontrará realização e satisfação. Conhecer este número permite uma visão mais clara sobre as suas motivações internas e pode servir como bússola para orientar as suas decisões e metas futuras.",
		"func": "Mês + Dia + Ano de nascimento",
		"1": "Este é o caminho da ousadia, do espírito empreendedor e da audácia pioneira, representando a busca incansável pela independência e a coragem de trilhar novos rumos. Você é movido pela determinação interior e pela confiança nas suas habilidades únicas, o que o coloca naturalmente em posição de liderança. A sua visão clara e vontade de superar obstáculos são a força motriz que o leva a conquistar desafios e a alcançar metas ambiciosas. Você é o visionário destemido, o pioneiro que traz mudanças positivas para si mesmo e para os outros, deixando um legado inspirador por onde passa.",
		"2": "Este é o caminho do zelador do lar, do jogador de equipa, do cuidador dedicado e do apreciador de preciosidades que encontra valor nas pequenas e grandes coleções da vida. A sua natureza amorosa e empática torna-o um pacificador nato, capaz de harmonizar relações e criar um ambiente acolhedor para aqueles ao seu redor. A sua habilidade em estabelecer conexões profundas e cultivar laços afetivos fortalece os relacionamentos, tornando-o um amigo, parceiro ou colega indispensável. Você é a personificação da diplomacia, da intuição e da sensibilidade, trazendo equilíbrio e serenidade onde quer que vá.",
		"3": "Neste percurso, desvela-se o espírito do aventureiro inquieto, do ser criativo que desafia as convenções, como o emblemático 'Peter Pan' ou o disciplinado cientista em busca da excelência. A sua mente fértil é uma fonte inesgotável de ideias e inspiração e a sua natureza otimista e alegre contagia todos ao seu redor. A sua criatividade sem limites encontra expressão em diferentes formas de arte e entretenimento, cativando audiências e deixando uma marca indelével nas suas criações. Você é o contador de histórias, o animador da vida, trazendo alegria e entusiasmo para o mundo.",
		"4": "Este é o caminho do trabalhador incansável ou do empreendedor comprometido e do amigo leal e generoso que estende a mão para ajudar com prontidão. A sua ética de trabalho exemplar e a sua abordagem pragmática da vida, garantem que alcance resultados notáveis em qualquer projeto. A sua palavra é o seu compromisso e você é conhecido pela sua honestidade e integridade. A sua capacidade de construir bases sólidas e sustentáveis torna-o um pilar confiável para a sua família, amigos e comunidade. Você é a âncora que mantém tudo junto, o esteio que traz estabilidade para as situações mais desafiantes.",
		"5": "Neste trajeto, vislumbra-se o guerreiro da liberdade, o promotor da mudança e o viajante elegante, dotado de habilidades sociais ímpares que cativam todos ao seu redor. A sua energia inesgotável e a sua curiosidade insaciável impulsionam-no em direção a novas experiências e aventuras. A sua personalidade magnética atrai pessoas de todas as esferas da vida, tornando-o um comunicador persuasivo e um excelente animador social. A sua adaptabilidade e espírito independente capacitam-no a enfrentar desafios com coragem e inovação, abraçando a vida com uma abordagem ousada e entusiasmada.",
		"6": "Este é o caminho do cidadão exemplar, do professor paciente que inspira o conhecimento, do defensor incansável da justiça e do acolhedor protetor que zela pelo bem-estar de todos. A sua alma generosa é movida pelo desejo de cuidar e nutrir os outros, tornando-o uma figura maternal ou paternal para muitos. A sua capacidade de ver além de si mesmo e abraçar a comunidade com amor incondicional é uma força poderosa que contribui para um mundo mais harmonioso e empático. A sua sabedoria e empatia tornam-no um conselheiro sábio, um amigo leal e um defensor corajoso dos direitos e valores universais.",
		"7": "Este caminho é reservado ao estudioso inquisitivo, ao perfeccionista dedicado à busca do conhecimento, ao génio visionário e ao guardião de segredos profundos. A sua mente ágil e perspicaz é um tesouro inestimável que o impulsiona a mergulhar nas profundezas da sabedoria e da compreensão. O seu desejo de desvendar os mistérios do Universo e descobrir a verdade oculta, torna-o um explorador incansável da mente e do espírito. A sua introspeção e intuição aguçada permitem que perceba nuances e detalhes que escapam à maioria, tornando-o um conselheiro valioso e um solucionador de enigmas inigualável.",
		"8": "Este é o caminho da matriarca ou patriarca, do juiz justo e imparcial, do produtor ou diretor talentoso que coordena harmoniosamente, como um maestro, o espetáculo da vida. A sua presença magnética e habilidade em liderar com justiça e equidade, colocam-no numa posição de autoridade e respeito. A sua ambição inabalável e habilidade de organizar recursos fazem de si um mestre na arte de concretizar projetos grandiosos. A sua determinação em aplicar o poder de forma responsável e ética faz de si uma influência positiva, em todas as áreas em que atua.",
		"9": "Este é o caminho da nobreza de alma, da gentileza compassiva que abraça a Humanidade com um olhar universal, empenhado em servir os outros com amor incondicional. A sua essência humanitária inspira o desejo de trazer alívio e bem-estar para aqueles que mais precisam. A sua visão elevada e o seu entendimento abrangente da vida levam-no a procurar o aperfeiçoamento espiritual e a encontrar significado nas conexões interiores e na interdependência de todas as coisas. A sua jornada é a de uma alma sábia, cuja compaixão e empatia tocam a vida daqueles que têm a sorte de cruzar o seu caminho.",
		"11": "O Impulso da Sua Alma é trazer paz, harmonia, beleza e honra como exemplos das suas mais altas qualidades espirituais para que todos possam apreciar e, esperançosamente, imitar. A sua sensibilidade incomum e intuição aguçada fazem de si um ser profundamente empático, capaz de discernir as necessidades e os sentimentos das pessoas ao seu redor. O seu papel enquanto conselheiro intuitivo permite que ofereça sabedoria e orientação para aqueles que procuram soluções e esclarecimentos. A sua presença de luz e inspiração ilumina o caminho para os outros, tornando-o uma figura de guia e apoio na jornada da vida.",
		"22": "Este é o caminho do visionário iluminado, dotado de prudência e organização que inspira e mobiliza a concretização de projetos grandiosos com a sua visão inspiradora e determinada. A sua mente analítica e estratégica é capaz de compreender a complexidade das situações e encontrar soluções que transcendem o comum. A sua presença imponente e o seu espírito empreendedor fazem de si um líder nato, capaz de assumir grandes responsabilidades e conduzir equipes em direção ao sucesso. A sua visão de longo alcance e a sua determinação incansável tornam-no num ‘construtor’ dotado de mestria, capaz de deixar um legado duradouro, para as gerações futuras."
	},
	"personality": {
		"title": "Personalidade",
		"description": "Este número é a chave para desvendar o seu 'Eu' mais íntimo, a sua natureza privada que nem sempre é visível aos olhos dos outros. Revela as suas motivações mais profundas, os desejos que se escondem por trás da sua expressão quotidiana e as suas paixões mais secretas. Enquanto o 'Mundo' pode ver a sua persona pública, este número revela o que realmente o define num nível mais profundo. É como um espelho da sua alma, refletindo as suas verdadeiras emoções, valores e aspirações mais genuínas. Este número desvenda os mistérios do seu ser interior, permitindo-lhe uma compreensão mais profunda de si mesmo e uma maior autenticidade na forma como se relaciona com o 'Mundo' ao seu redor.",
		"func": "Dia de nascimento",
		"1": "A sua natureza dinâmica e determinada, aliada à sua liderança natural, é como um vendaval de energias positivas que moldam o terreno para o florescer do seu sucesso, iluminando os caminhos que você trilha. O seu espírito inabalável é um farol de inspiração para todos ao seu redor, impulsionando-os a enfrentar desafios e abraçar oportunidades com coragem. A sua determinação incansável leva-o a enfrentar cada obstáculo de frente, encontrando soluções inovadoras e criativas para alcançar as suas metas e vislumbrar horizontes ainda mais grandiosos.",
		"2": "Como um pacificador nato, você nutre e cuida dos corações ao seu redor, oferecendo aconchego e bondade como um refúgio seguro. A sua presença é como um bálsamo, imprescindível em todas as esferas da vida, seja como amigo leal, parceiro afetuoso, empregado dedicado ou líder inspirador. A sua capacidade de mediar conflitos com empatia e compreensão faz de você um verdadeiro elo entre pessoas e equipas, construindo pontes de harmonia onde antes havia desavenças. A sua generosidade e atenção aos detalhes tornam cada interação valiosa e significativa, deixando um rasto de bem-estar por onde passa.",
		"3": "A grandiosidade do seu mundo interior é de tirar o fôlego, onde a imaginação corre solta e a criatividade não tem limites. O seu espírito artístico e inventivo é capaz de transformar a simplicidade em esplendor, tornando cada momento numa experiência memorável. O seu talento para criar ambientes acolhedores e eventos envolventes é reconhecido por todos que têm a honra de participar. Você é o anfitrião exemplar que encanta e acolhe todos com mestria, tornando cada encontro uma celebração da vida e das possibilidades infinitas.",
		"4": "Sua dedicação no trabalho é imensurável e o seu empenho incansável é como uma forja que molda resultados brilhantes. A sua palavra é tida como um tesouro inestimável, pois a sua honestidade é tão valiosa quanto ouro. A sua ética de trabalho impecável e a sua integridade inabalável inspiram confiança e respeito em todos os que têm a sorte de colaborar ao seu lado. O seu compromisso com a excelência e a busca constante pela qualidade são os alicerces sólidos que sustentam as suas conquistas e abrem portas para um futuro promissor.",
		"5": "Uma inteligência brilhante e um entusiasmo contagiante são as raízes da sua inspiração sobre todos os que têm a sorte de cruzar o seu caminho. A sua sede insaciável por conhecimento e a vontade inabalável de explorar novas ideias tornam-no um líder visionário, capaz de enxergar além das limitações convencionais. A sua afabilidade cativa a todos, tornando-o um farol de positividade e otimismo em qualquer ambiente. O seu entusiasmo é como um íman, atraindo pessoas e oportunidades, transformando desafios em motivação e abrindo caminhos para a realização de sonhos audaciosos.",
		"6": "Responsabilidade e amor pelas pessoas estão intrinsecamente ligados à sua essência. Como um amante da beleza, um apreciador da natureza e um zelador do lar, você valoriza cada momento de conexão com o mundo ao seu redor. A sua dedicação à família, amigos e comunidade é evidente em cada ato de cuidado e apoio. A sua habilidade de ver a beleza nos detalhes quotidianos é um presente que encanta e inspira a todos. O seu lar é um santuário, refletindo a sua alma acolhedora e serena, onde todos se sentem bem-vindos e acarinhados.",
		"7": "A sua mente é como um universo de conhecimento inexplorado, uma busca incessante por novas descobertas. O seu espírito inquieto é a chama que alimenta a sua sede pelo saber, levando-o a explorar diferentes campos do conhecimento com paixão e curiosidade. O seu método analítico e orientado para a pesquisa é como um guia confiável na sua jornada intelectual, permitindo-lhe aprofundar-se nos mistérios do universo. A busca pelo conhecimento é a sua verdadeira jornada e a sua mente voraz é um farol de inspiração, iluminando o caminho para todos que desejam expandir as suas mentes e desbravar novas fronteiras do saber.",
		"8": "A ambição que corre nas suas veias o conduz a grandes feitos, enquanto sua organização impecável é alicerçada em qualidade e excelência. Nascido para liderar, você é o guardião do protocolo e da justiça, estabelecendo padrões elevados para si mesmo e para aqueles ao seu redor. A sua determinação em atingir metas é notável, e a sua habilidade de inspirar e motivar outros é uma dádiva que o destaca como um líder nato. Você é o operador meticuloso, focado no sucesso de cada empreendimento, e o senso de justiça é a bússola que o guia na sua jornada rumo a um mundo mais equilibrado e próspero.",
		"9": "A polivalência é uma das suas maiores dádivas. A sua criatividade desenfreada floresce quando direcionada a servir aos outros, pois é na dedicação ao próximo que encontra o seu propósito mais genuíno. A sua habilidade de se adaptar a diferentes situações e desafios é notável, permitindo-lhe brilhar em cada empreendimento que abraça. O seu coração generoso e compassivo é uma fonte inesgotável de inspiração para aqueles que precisam de ajuda e apoio. Você é o exemplo vivo de que o talento pode ser multifacetado e a sua essência verdadeira é encontrada quando está servindo e impactando positivamente a vida de outros.",
		"10": "Independência e responsabilidade andam de mãos dadas na sua vida. O seu coração atencioso é como uma luz que ilumina os caminhos daqueles ao seu redor, e a sua postura otimista o torna um farol de positividade em meio a tempos adversos. A sua natureza ativa e pró-ativa enxerga desafios como oportunidades de crescimento, e você sempre encontra o lado positivo em cada situação. A sua atitude resiliente é como uma bússola que o mantém no rumo certo, mesmo diante das tempestades. O seu equilíbrio entre independência e responsabilidade é o alicerce da sua jornada para o sucesso e a satisfação pessoal.",
		"11": "Sensibilidade é a essência do seu ser e o seu intelecto aguçado é uma fonte inesgotável de ideias originais e inspiração. Você é um ouvinte excecional, oferecendo apoio incondicional a todos os que buscam os seus conselhos e amparo. A sua mente brilhante é como um farol que guia aqueles que estão perdidos, mostrando-lhes novos caminhos e possibilidades. A originalidade é a sua marca registada, permitindo que você se destaque em todas as esferas da vida. Você é uma fonte de inspiração para muitos, naturalmente assumindo o papel de apoio e amparo, o elo que une corações e mentes em busca de um mundo melhor.",
		"12": "O seu charme inato e simpatia cativante abrem portas e corações, enquanto a sua criatividade sem limites o impulsiona a superar todos os obstáculos na sua busca por realizações. A sua determinação é a força motriz que o conduz em direção aos seus objetivos, com a visão do futuro como guia para alcançar cada sonho. A sua mente criativa é como um turbilhão de ideias e você é hábil em dar forma e vida a cada uma delas. A sua capacidade de inovar é encantadora e a persistência com que procura as suas aspirações tornam-no um exemplo admirável, para todos os que desejam alcançar as suas próprias ambições.",
		"13": "Perspicácia e independência são as suas marcas registadas e a sua sinceridade é como uma luz que dissipa ilusões e revela a verdade nua e crua. Você enfrenta cada conceito, circunstância ou empreendimento com tenacidade e resistência extraordinárias, superando desafios com sabedoria e determinação. A sua dedicação em cada tarefa é incansável e você é capaz de transformar obstáculos em oportunidades, para o crescimento pessoal. A sua mente prática é como um guia confiável, levando-o a tomar decisões assertivas e estratégicas. A sua presença é como uma âncora sólida, sempre firme na sua jornada rumo ao sucesso e à concretização dos seus sonhos.",
		"14": "A sua mente é um manancial inesgotável de ideias afiadas e conceitos inovadores, um verdadeiro motor criativo que gera soluções práticas e originais para cada desafio que surge no seu caminho. A sua perspicácia é como um farol que ilumina as mentes daqueles que o cercam, impulsionando todos a se superarem e alcançarem os seus melhores resultados. Você é a personificação da energia em movimento, nunca faltando entusiasmo para mergulhar em novos projetos e empreendimentos. A sua mente é a arquiteta dos mais diversos planos e estratégias, construindo pontes que conectam o possível ao extraordinário.",
		"15": "A sua mente intelectual, analítica e singular, é como um vasto laboratório do conhecimento, onde cada pergunta é uma jornada de exploração e descoberta. Os seus períodos de solidão são preciosos momentos de contemplação, investigando a sede inesgotável por sabedoria e ultrapassando fronteiras convencionais em busca de respostas que expandem horizontes. O seu desejo de compreender o desconhecido é como uma força motriz que o impulsiona a ir além dos limites aceites e mergulhar num universo de possibilidades. A sua busca incessante por respostas e inovações é uma inspiração para todos que compartilham do prazer de conhecer e aprender.",
		"16": "A sua mente intelectual e única é como um universo vasto e inexplorado, onde a busca pelo conhecimento é uma jornada constante que ultrapassa fronteiras aceites e rompe paradigmas. Em períodos de solidão, você encontra o refúgio para investigar a sua sede interminável de sabedoria, mergulhando nas profundezas de questões complexas e abstratas. O seu espírito inovador é como um farol que ilumina novos caminhos, abrindo portas para descobertas inéditas. A sua mente é o epicentro das revoluções intelectuais, desafiando o status quo e desvendando mistérios que ampliam o conhecimento humano.",
		"17": "Inteligência, ambição, coragem e vitalidade fluem nas suas veias, atributos que o capacitam a assumir o controlo com destreza e governar com mestria. O seu espírito inabalável leva-o a enfrentar desafios com ousadia e a sua determinação é como um combustível inesgotável para conquistar vitórias extraordinárias. Você é a própria essência da classe, espelhando os valores mais nobres e inspirando todos ao seu redor com o seu exemplo de liderança. A sua mente brilhante e sagaz torna-o apto a compreender e enfrentar os problemas mais complexos, traçando soluções que beneficiam a todos.",
		"18": "Uma potência multitalentosa, você é uma fusão de sabedoria, força, coragem e compaixão que abraça a todos com um abraço acolhedor. O seu coração generoso é como uma fonte inesgotável de auxílio e apoio, estendendo a mão a todos que precisam. A sua presença é notada e sentida onde quer que você esteja pois a sua capacidade de ajudar os outros é incomparável. Você é um guerreiro de coração gentil, capaz de enfrentar desafios com bravura e de lutar pelas causas mais nobres. A sua força reside na habilidade de transformar vidas positivamente, deixando um legado de amor e compaixão por onde passa.",
		"19": "A sua alma aventureira é como um pássaro que alça voos rumo à liberdade e à diversidade. A busca por variedade e mudança é uma constante na sua vida e você encontra prazer em explorar novos horizontes e abraçar novas experiências. Quando inspirado, você transforma-se numa figura ímpar, capaz de assumir o papel de empregado, chefe, parceiro e amigo com tenacidade e dedicação. A sua natureza honrada é um farol que guia as suas ações, sempre procurando fazer a diferença e deixar uma marca positiva onde quer que vá.",
		"20": "A sua natureza calorosa e prestável é como um abraço reconfortante em qualquer ambiente de trabalho. A sua dedicação em ajudar os outros é sincera e você é uma figura apreciada por onde passa, colecionando amigos ao longo da sua jornada. A sua habilidade de manter laços afetivos fortes é admirável, pois você valoriza cada conexão como uma jóia preciosa. O seu coração prestável é um exemplo a ser seguido e a sua prudência é como um farol que guia os seus passos, fazendo de si um companheiro leal e um colega de confiança.",
		"21": "O seu coração é um tesouro de bondade e otimismo que ilumina a vida daqueles que têm a sorte de o conhecer. Você é a personificação do bom coração, inspirando a todos com o seu espírito generoso e a sua visão do mundo inspiradora. A sua alma é atraída pelo que é belo, de qualidade e envolvente e a sua própria criatividade é como uma estrela que brilha intensamente. O seu magnetismo é como um íman que atrai pessoas de todas as esferas da vida, formando um círculo de amizades sinceras e duradouras. Você é um verdadeiro visionário, capaz de enxergar a beleza no mundo e espalhar o seu brilho como um presente precioso para todos ao seu redor.",
		"22": "Exibindo uma disciplina extraordinária, a sua energia e lógica são as ferramentas que moldam os seus feitos com esmero e sensibilidade. Você possui a mente de um visionário experiente, capaz de compreender a complexidade dos cenários e tomar decisões informadas e esclarecidas. O seu olhar está sempre voltado para o futuro, vendo para além do horizonte e antecipando os desafios com uma habilidade ímpar. Empreendedor por natureza, você é destemido ao enfrentar novas jornadas e empreender novos caminhos. A sua mente é uma mina inesgotável de ideias inovadoras, prontas para serem exploradas e transformadas em realidade.",
		"23": "O seu espírito acolhedor e divertido é como uma brisa refrescante em dias quentes. A sua mente rápida e criativa está sempre borbulhando com novas ideias e a sua originalidade é como um sopro de ar fresco. O seu intelecto aguçado é uma ferramenta valiosa, permitindo que elabore planos inteligentes e únicos, prontos para alcançar o sucesso em qualquer projeto. A sua natureza orientada para a liberdade é como asas que o conduzem a voos ousados, explorando horizontes desconhecidos e abrindo caminhos antes inimagináveis.",
		"24": "O seu charme é tão envolvente quanto uma poesia suave declamada ao luar, enquanto a sua sociabilidade é como uma dança cativante que atrai a todos para o seu círculo de amizade. O seu espírito bem disposto é uma fonte inesgotável de alegria, trazendo risos e sorrisos aonde quer que vá. A sua alma generosa está sempre pronta para ir além do esperado, estendendo a mão pronto a ajudar quem precisa. Você é um amigo leal e um parceiro honrado, sempre presente para compartilhar momentos de felicidade e apoiar nos desafios.",
		"25": "A sua sabedoria é como um tesouro oculto e a sua curiosidade incansável é a semente que planta o conhecimento e a compaixão no seu coração. O seu reservatório de sabedoria inata é como um farol que guia os seus passos em direção ao crescimento pessoal e à compreensão das complexidades da vida. A sua natureza compassiva e generosa é um chamamento interior para servir à humanidade em geral e você é movido a ajudar todos que cruzam o seu caminho. A sua mente sagaz é capaz de decifrar os enigmas mais complexos da existência, transformando o mistério em compreensão e sabedoria.",
		"26": "A sua personalidade é imponente como a de um general de cinco estrelas, com uma determinação firme e uma predileção pelo protocolo. O seu 'sexto sentido' é como uma bússola interior, que o orienta prontamente entre o certo e o errado, agindo como exemplo para todos que o cercam. A sua liderança é natural e inquestionável e a sua postura é como uma rocha sólida no meio das tempestades. O seu carisma é como um farol que atrai e inspira, iluminando o caminho para o sucesso e a prosperidade. Você é um líder digno de admiração e o seu exemplo é seguido com entusiasmo e devoção.",
		"27": "A sua alma é 'antiga', carregando consigo um vasto conhecimento e perceção extraordinária. Viajar e mudar são partes essenciais para o seu bem-estar, como se cada jornada trouxesse uma profunda conexão com a própria essência do Universo. A sua mente curiosa é um livro aberto, sempre ávida por novas páginas e novas experiências. O seu conhecimento inato é como uma lanterna que ilumina o caminho para a sabedoria ancestral, permitindo que você compreenda a profundidade dos mistérios do mundo.",
		"28": "O seu charme inato é como um feitiço encantador, cativando corações e mentes à sua volta. A sua independência é uma característica marcante e você é um diplomata nato, capaz de construir pontes e mediar conflitos com mestria. O seu caráter é o de um realizador e líder, cujos ideais elevados servem de inspiração para todos ao seu redor. Você é movido pela vontade de alcançar os seus objetivos, sempre mantendo a integridade e a ética como guias na sua jornada. As suas ações refletem os seus princípios elevados, tornando-o um exemplo de excelência e liderança em todas as esferas da vida.",
		"29": "A sua natureza gentil e sensível é complementada por uma combinação poderosa de energia e carisma, que atrai as pessoas a você como um íman. O seu 'sexto sentido' é uma bênção que permite oferecer ombros fortes para muitos que buscam conforto. Você é um porto seguro, capaz de ouvir, compreender e oferecer apoio sem julgamentos. A sua presença é como um raio de sol em dias nublados, aquecendo o coração daqueles que têm o privilégio de o conhecer. A sua habilidade de ajudar e acolher é uma dádiva preciosa, que faz a diferença na vida daqueles que atravessam o seu caminho.",
		"30": "A sua inteligência brilhante e criatividade são como tintas que pintam o mundo com cores vivas e vibrantes. O seu amor pela diversão é uma inspiração para todos, tornando cada momento numa celebração da vida e da criatividade. Você é excecionalmente talentoso em qualquer empreendimento criativo, trazendo uma perspectiva única e inovadora para tudo que faz. A sua mente socialmente hábil destaca-o dos demais, sempre cativando a atenção e inspirando admiração. A sua natureza humorística é um tempero especial, enriquecendo cada interação com alegria e leveza.",
		"31": "Criatividade e inovação são as marcas do seu ser e o seu vasto conhecimento é como um oceano profundo e inexplorado. Você é alguém confiável, sempre cumprindo compromissos com pontualidade e dedicação. Você é um ser de hábitos e a sua rotina organizada permite que se mantenha no caminho do sucesso. Como parceiro e amigo dedicado, você é uma fonte de inspiração, sempre disposto a compartilhar o seu conhecimento e apoiar aqueles que o cercam na sua jornada de crescimento pessoal e profissional."
	},
	"attitude": {
		"title": "Atitude",
		"description": "Este número exerce a sua maior influência nas primeiras três décadas de vida, revelando o modo como você reage e interage com as circunstâncias durante a juventude. É nessa fase que as suas características mais proeminentes se manifestam, moldando a sua abordagem diante dos desafios e oportunidades que surgem. Representando a sua essência interior, este número revela aspectos profundos da sua natureza privada, aqueles que atuam nos bastidores de sua personalidade, impulsionando as suas motivações e escolhas. Compreender o significado deste número é desvendar os segredos da sua juventude e ganhar insights valiosos sobre a sua jornada de autodescoberta e crescimento.",
		"func": "Mês + Dia de nascimento",
		"1": "Desde o início, você revelou uma forte vontade e uma natureza independente. A preferência por fazer as suas próprias escolhas é inegável e a sua teimosia é evidente quando direcionado de maneira diferente. A sua independência é um traço marcante que o impulsiona a buscar as suas metas com resolução e coragem, sem se curvar às pressões externas. Na sua jornada, você aprenderá a canalizar essa força interior para conquistar os desafios que a vida lhe apresenta, moldando o seu caminho com autenticidade e determinação.",
		"2": "Desde criança, você é uma alma doce, gentil, amável e cuidadosa. Cuidar e ser cuidado são atos que lhe trazem imensa satisfação e realização. A sua sensibilidade e perceção aguçada permitem que você se conecte profundamente com os sentimentos e necessidades dos outros. Essas características fazem de si um amigo e confidente confiável, sempre pronto para apoiar e oferecer conforto quando necessário. A sua natureza atenciosa é um presente especial que ilumina a vida daqueles que têm a bênção de conhecê-lo.",
		"3": "Nos seus primeiros passos, pode ter mostrado uma timidez natural mas à medida que aprendeu a falar, revelou-se um artista nato. A sua criatividade é encantadora e você é capaz de ver o ‘Mundo’ de maneira única e inspiradora. A aventura é uma fonte de excitação para você, sempre em busca de novas experiências e desafios que nutrem a sua imaginação fértil. A sua personalidade cativante é capaz de atrair a atenção e conquistar corações, tornando-o numa presença encantadora em qualquer ambiente.",
		"4": "Desde cedo, percebe-se em si um temperamento sensível e teimoso. No entanto, quando elogiado e encorajado, você revela-se doce e diligente nas suas ações. O apoio e reconhecimento têm um poder especial sobre si, incentivando-o a mostrar e a fazer o seu melhor. A sua dedicação é como uma luz que brilha intensamente quando acolhida com carinho e incentivo. Ao longo da vida, aprenderá a equilibrar a sua sensibilidade e a encontrar força nas suas emoções, tornando-se uma pessoa resiliente e inspiradora.",
		"5": "Desde o início, a sua energia transborda de forma contagiante! Você é movido por uma inquietude saudável, procurando estímulo mental e físico constante. No entanto, a impaciência pode surgir quando os desafios se tornam prolongados. A sua sede por conhecimento e aventura é insaciável, sempre ansioso para explorar novas ideias e lugares. Aprenderá, ao longo do tempo, a encontrar o equilíbrio entre a energia inesgotável e a paciência necessária para alcançar as suas metas com êxito.",
		"6": "Desde o início, a sua essência é marcada pela responsabilidade, consideração e gentileza. Você tem um coração carinhoso, que se preocupa genuinamente com todos ao seu redor, desde os seus pais e irmãos até os seus amigos e toda a natureza. A dedicação em cuidar e apoiar aqueles que ama é incomparável. A sua habilidade de construir relações profundas e harmoniosas faz de você uma figura indispensável na vida daqueles que têm o privilégio de compartilhar o seu caminho.",
		"7": "Desde jovem, a sua mente brilhante busca incessantemente o conhecimento. O conhecimento é um alimento para a sua alma curiosa e você é fascinado por uma ampla gama de interesses e desafios. Estar sozinho é algo de sagrado para si, permitindo que se dedique a novas descobertas e insights profundos. A sua mente analítica é capaz de desvendar mistérios e compreender complexidades, tornando você um eterno aprendiz e um inspirador detentor de sabedoria.",
		"8": "Desde cedo, você nasceu para se destacar e ser exemplar em tudo o que faz. A sua motivação vem da necessidade de sentir-se no controle e de alcançar a excelência. Quando incentivado, você é o aluno nota '20', dedicado e comprometido com o sucesso. A sua liderança é natural, com o potencial de se destacar em diversas áreas. Aprenderá a usar essa determinação e liderança para criar um impacto positivo na sua vida e na vida daqueles que o rodeiam.",
		"9": "Desde jovem, a sua alma carrega uma sensibilidade e sabedoria incomum para a sua idade. Elogios e incentivos têm um efeito poderoso nas suas conquistas, encorajando-o a alcançar o melhor de si. A sua empatia é uma bênção, permitindo-lhe compreender profundamente as necessidades e desafios dos outros. Você é um guia natural, capaz de oferecer conselhos valiosos e um ombro amigo para aqueles que precisam. A sua presença ilumina a vida daqueles que têm o privilégio de compartilhar o seu caminho.",
		"11": "Desde cedo, a sua sensibilidade é amplificada, assim como a sua intuição. A sua conexão com o mundo elevado e a música é poderosa, trazendo inspiração e um toque de magia à sua vida. A sua natureza doce, gentil e cerebral é notável, especialmente quando inspirado nas suas paixões. Você é uma alma de estrela, destinada a brilhar intensamente, iluminando o caminho para aqueles que buscam a sua orientação e sabedoria.",
		"22": "Desde o início, a teimosia corre nas suas veias mas com incentivo e direcionamento, você revela-se determinado, empreendedor, inspirado e inventivo. A sua mente brilhante é capaz de encontrar soluções onde outros vêem obstáculos, tornando-o um verdadeiro visionário. O seu potencial para realizar grandes feitos é notável e, ao longo da vida, aprenderá a canalizar essa determinação para alcançar metas extraordinárias e deixar um legado impactante."
	},
	"character": {
		"title": "Caráter",
		"description": "Este número representa principalmente as suas qualidades públicas e sociais mas também as demonstra nos seus relacionamentos pessoais. As suas características mais proeminentes serão visíveis para aqueles ao seu redor, tanto em contextos públicos quanto privados. A sua personalidade e comportamento influenciarão a forma como interage com o 'Mundo' ao seu redor, seja em ambientes sociais, no trabalho, no seu círculo social ou com amigos e familiares. As suas habilidades de relacionamento, comunicação e liderança serão notáveis em todas as áreas da sua vida, mostrando coerência genuína entre o que você apresenta ao mundo exterior e o que vive internamente.",
		"func": "Letras no nome",
		"1": "A posse de uma mente genuinamente original e inovadora, combinada com um foco firme nos seus objetivos, qualifica você como um líder inato. O seu poder de liderança não está apenas em comandar mas em inspirar e conduzir os outros através de ideias revolucionárias e soluções criativas. A sua visão audaciosa e determinação incansável preparam o terreno para o sucesso em qualquer empreendimento que se proponha a enfrentar.",
		"2": "A sua natureza naturalmente diplomática, de bom coração e pacífica é como a de um verdadeiro embaixador das pessoas. Você tem a capacidade única de resolver conflitos com sabedoria e empatia, unindo pessoas e criando ambientes harmoniosos. A sua persona pública é um exemplo de equilíbrio e equanimidade, tornando-se um parceiro confiável e um líder que busca sempre o acordo e o bem-estar coletivo.",
		"3": "A suas habilidades otimistas, entusiastas e criativas fazem de si um verdadeiro catalisador de inspiração e entretenimento em qualquer campo que escolha atuar. A sua capacidade de envolver e cativar as pessoas é uma luz brilhante que ilumina a todos ao seu redor. O seu espírito inovador e coração aberto para novas ideias tornam-no um líder que está sempre à frente do seu tempo, moldando o futuro com paixão e entusiasmo.",
		"4": "A sua persona pública é cuidadosa, organizada, sistemática e confiável, características que o tornam uma figura procurada em ambientes de trabalho e negócios. A sua diligência e ética de trabalho exemplar fazem de si um trabalhador indispensável ou líder competente e dedicado. A sua presença confiável é uma âncora para aqueles ao seu redor, proporcionando estabilidade e confiança em todas as situações.",
		"5": "A sua natureza charmosa, articulada, flexível e consciente do estilo fazem de si um verdadeiro pioneiro na sua área de atuação. A sua capacidade de engajar e inspirar as pessoas é uma das suas maiores forças, e quando você se concentra numa missão, é capaz de liderar com carisma e inovação. A sua presença magnética atrai a atenção e o respeito daqueles que o rodeiam, tornando-o numa força a ser reconhecida.",
		"6": "Você é um humanista nato, orientado para a comunidade, com um coração excecionalmente generoso. A sua dedicação em servir aos outros é evidente em tudo o que faz, seja como pai, professor ou em qualquer outro papel que desempenhe. A sua liderança é exemplar em qualquer projeto ou causa, pois o seu compromisso em ajudar aqueles ao seu redor é genuíno e inspirador.",
		"7": "A sua mente procura o conhecimento incessantemente. Como um filósofo vanguardista, você tem a habilidade de penetrar nas complexidades da existência e revelar verdades profundas. Embora não procure ser o centro das atenções, o seu papel como professor, professor universitário ou especialista é incomparável e a sua sabedoria é uma fonte inesgotável de aprendizagem e inspiração.",
		"8": "A sua persona pública é líder e imponente e a sua facilidade em discernir o certo do errado em qualquer situação é, verdadeiramente, notável. Como um professor de professores, juiz, júri, produtor ou diretor, possui um sexto sentido que guia as suas decisões com sabedoria e justiça. A sua liderança é um exemplo de força e retidão, atraindo a admiração e o respeito daqueles que o seguem.",
		"9": "Você é um sábio nato e socialmente agradável. A sua inclinação para servir os outros é como uma missão de vida, buscando sempre beneficiar a comunidade ao seu redor. A sua liderança é centrada no cuidado e na compaixão e você é um guia exemplar para aqueles que precisam de ajuda. A sua natureza desinteressada é uma fonte constante de inspiração, para todos que têm a honra de conhecê-lo.",
		"11": "Como conselheiro ou líder comunitário, você é empático, esclarecido e compreensivo. A sua presença naturalmente iluminada atrai a atenção, destacando-se dos demais. O número 11 está associado à fama e iluminação e a sua liderança é marcada por uma sabedoria elevada, capaz de guiar e orientar aqueles que procuram o seu apoio e conselho.",
		"22": "Você é um construtor de impérios com uma mente elevada. É espiritualmente orientado e profundamente dedicado. A sua capacidade de organizar e liderar é incomparável e a sua abordagem direta é apreciada em qualquer causa a que se dedique. A sua visão é grandiosa e a sua liderança é capaz de transformar sonhos em realidade, tornando-o um verdadeiro catalisador para a mudança positiva num nível significativo."
	},
	"soul": {
		"title": "Impulso da Alma",
		"description": "Esta influência realça as características do seu 'Eu' intuitivo e metafísico. Revela a sua conexão com o mundo interior, as suas percepções mais profundas e a sabedoria intrínseca. É uma janela para a sua essência mais autêntica que pode orientar as suas decisões e ações de forma mais significativa. Este número destaca as suas qualidades mais sensíveis e espirituais, mostrando como moldam a sua abordagem de vida e as suas interações com tudo o que o rodeia. Esta influência pode trazer clareza sobre os seus desejos mais intrínsecos e direcionar a sua jornada na busca de significado e propósito.",
		"func": "Vogais no nome",
		"1": "O impulso da sua alma é ser um visionário inovador, um criativo incansável que busca liderar as massas em direção a um reino superior de consciência e compreensão. O seu objetivo é gerar compaixão por todos, inspirando uma mudança positiva através das suas ideias e ações revolucionárias. A sua alma busca constantemente desbravar novos caminhos e abrir novas possibilidades para aqueles que o cercam, sendo um farol de luz em tempos de escuridão.",
		"2": "O impulso da sua alma é trazer paz e harmonia para os relacionamentos e interações com os outros. A sua natureza carinhosa e amorosa é como um bálsamo para aqueles que estão ao seu redor, e você procura promover um ambiente de entendimento e compaixão. A sua alma é impulsionada a nutrir e cuidar, trazendo conforto e apoio aos corações que necessitam de amor e cuidado.",
		"3": "O impulso da sua alma é espalhar alegria e entusiasmo por onde passa. A sua paixão pela vida é contagiante e a sua criatividade é uma fonte inesgotável de inspiração para os outros. A sua alma busca despertar a imaginação e os interesses emocionantes das pessoas, criando um mundo de possibilidades e sonhos realizáveis. A sua presença é como uma celebração da vida, trazendo risos e felicidade para aqueles que têm a sorte de o conhecer.",
		"4": "O impulso da sua alma é colocar honestidade, confiança e determinação em tudo o que faz. A sua alma é guiada pelo desejo sincero de ajudar os outros e a si mesmo a alcançar resultados inspiradores e esclarecedores. A sua abordagem prática e responsável é uma bússola para aqueles que buscam orientação e a sua palavra é uma promessa sólida com a qual se pode contar nos momentos mais desafiadores.",
		"5": "O impulso da sua alma é usar a sua energia transbordante e mente aberta para trazer contribuições significativas para a humanidade. A sua alma é como um raio de luz, sempre em movimento e em busca de novas experiências e conhecimentos. A sua natureza revolucionária impulsiona-o a explorar o desconhecido e a trazer novas perspetivas que elevam a consciência coletiva.",
		"6": "O impulso da sua alma é ser o guardião responsável e gentil de todos ao seu redor. A sua alma é orientada para o serviço, sentindo-se compelido a ensinar, aconselhar e confortar aqueles que precisam de ajuda. A sua presença é como um porto seguro e a sua dedicação em nutrir e cuidar das pessoas, é um exemplo a ser seguido.",
		"7": "O impulso da sua alma é usar a sua mente analítica e curiosa para descobrir ou revelar algo significativo que possa beneficiar muitos. A sua alma busca a verdade e o conhecimento, e você é movido pela sede insaciável de desvendar os mistérios do universo. A sua abordagem única e perspicaz para os desafios é uma fonte de inspiração para aqueles que desejam aprofundar o seu entendimento do Mundo.",
		"8": "O impulso da sua alma é trazer qualidade, consistência e inspiração em tudo que toca. A sua alma é como um guia de excelência, em todas as áreas da vida. A sua liderança é marcada pela integridade e pelo compromisso com a busca da perfeição, inspirando aqueles ao seu redor a alcançar o seu potencial máximo.",
		"9": "O impulso da sua alma é usar as suas qualidades diplomáticas, gentis e humanas para deixar um legado positivo no mundo. A sua alma é movida por um desejo profundo de servir e ajudar os outros, e você se empenha em criar um ambiente de harmonia e compreensão. A sua dedicação em compartilhar as suas habilidades e conhecimentos prepara o cenário para que outros possam seguir os seus passos nobres.",
		"11": "O impulso da sua alma é trazer paz, harmonia, beleza e honra para o mundo ao seu redor. A sua alma é iluminada e elevada e você é um exemplo das suas mais altas qualidades espirituais. A sua liderança é marcada por um senso profundo de responsabilidade e integridade, inspirando aqueles que o cercam a aspirar a uma existência mais significativa e autêntica.",
		"22": "O impulso da sua alma é a de um construtor dotado de mestria, com um desejo profundo de servir a humanidade e a Terra. A sua mentalidade elevada e humanitarismo levam-no a dedicar a sua energia e habilidades para ajudar e melhorar a vida dos outros. A sua alma é guiada por uma visão grandiosa e uma abordagem prática, tornando você um agente de mudança poderoso e inspirador."
	},
	"agenda": {
		"title": "Agenda Oculta",
		"description": "Esta energia representa a sua essência interior e os desejos profundos que muitas vezes permanecem ocultos. Ela oferece um vislumbre das paixões e anseios que impulsionam as suas escolhas e decisões, mesmo que possa não estar completamente consciente delas. Conhecer esta vibração pode ser uma jornada de autodescoberta, permitindo que se alinhe com o que realmente o motiva e guia em sua vida.",
		"func": "Consoantes no nome",
		"1": "Esta agenda desperta em si o desejo inato de ser independente, líder e inovador. A sua alma busca criar conceitos e coisas originais e únicas, sendo impulsionada por uma vontade inabalável de deixar a sua marca no mundo. Você sente-se motivado a trilhar o seu próprio caminho e a liderar aqueles ao seu redor para alcançarem novos horizontes e conquistas extraordinárias.",
		"2": "Esta agenda traz no seu cerne o desejo inato de viver a vida em paz e harmonia. A sua alma é caracterizada por uma natureza cooperativa, afetuosa e não agressiva, buscando promover relações harmoniosas e equilibradas em todos os aspetos da vida. Você valoriza a importância das parcerias e sente-se completo quando pode nutrir e ser nutrido pelas conexões emocionais com os outros.",
		"3": "Esta agenda inspira em si o desejo inato de ser criativo e proporcionar entretenimento e alegria aos que o cercam. A sua alma é como um espetáculo vibrante que cativa e encanta as pessoas ao redor, buscando compartilhar a sua energia positiva e alegre. Você anseia por aventuras e viagens, encontrando prazer em explorar novos horizontes e experiências emocionantes.",
		"4": "Esta agenda envolve a busca por lógica, organização e perseverança para manifestar as suas necessidades inatas e alcançar a paz de espírito que tanto almeja. A sua alma é movida por um desejo profundo de estabilidade e segurança e você esforça-se para criar uma base sólida em todos os aspetos da vida. A sua abordagem prática e determinada é uma força motriz para concretizar os seus objetivos.",
		"5": "Esta agenda inspira em si o desejo inato de liberdade e independência acima de tudo. A sua alma anseia por explorar e viver a vida sem restrições, buscando experiências diversificadas e emocionantes. Você é impulsionado por um espírito aventureiro, encontrando a sua realização pessoal em viagens e na busca por novos conhecimentos e horizontes.",
		"6": "Esta agenda tem um forte foco humanitário inato, impelindo-o a ajudar e cuidar de todas as coisas da Terra. A sua alma é guiada por um profundo senso de responsabilidade para com a humanidade, os animais e a natureza. Você sente-se realizado quando pode oferecer suporte e amor incondicional às pessoas ao seu redor, sendo um farol de compaixão e gentileza.",
		"7": "Esta agenda desperta em si o desejo inato de obter conhecimento em diversas áreas, desde ciências esotéricas até filosofias, artes e espiritualidade. A sua alma está sempre incansavelmente empenhada em desvendar os mistérios do universo. Você sente-se atraído por tudo o que é profundo e significativo, alimentando a sua mente com sabedoria e entendimento.",
		"8": "Esta agenda expressa em si um desejo inato por poder, reconhecimento e acumulação de recursos materiais. A sua alma busca destacar-se e prosperar e você possui habilidades de liderança excecionais. Seja atuando como um professor iluminado das massas ou procurando sucesso nos negócios, você é impelido a alcançar altos patamares de excelência.",
		"9": "Esta agenda afeta o desejo inato de alcançar o que há de melhor em tudo. A sua alma é inspirada pela busca da perfeição e do refinamento em todas as áreas da vida, desde o vestuário até o entretenimento. Por outro lado, também pode sentir uma profunda necessidade de viver uma vida humanitária e altruísta, dedicando-se ao bem-estar coletivo.",
		"11": "Esta agenda incita em si uma necessidade inata de ensinar, aconselhar ou se envolver nas artes de cura para ajudar muitos. A sua alma é iluminada e compassiva, buscando ser um agente de mudança positiva no mundo. Você sente-se chamado a trazer paz, harmonia e beleza para a vida das pessoas ao seu redor, inspirando-as a encontrar significado e propósito.",
		"22": "Esta agenda inspira em si um desejo inato de fazer algo grandioso para a humanidade. Como um construtor dotado de mestria, a sua alma é impulsionada a servir e ajudar os outros numa escala maior. Você possui uma visão grandiosa e prática, buscando realizar feitos notáveis e deixar um legado positivo para o mundo. A sua habilidade única de pensar em grande escala capacita-o a realizar conquistas notáveis."
	},
	"purpose": {
		"title": "Propósito Divino",
		"description": "Este número reflete o destino dos seus últimos anos de vida, revelando os objetivos e realizações que a sua alma almeja alcançar. É uma oportunidade para explorar o propósito mais profundo da sua existência e concentrar-se naquilo que verdadeiramente importa para si. Ao compreender esta vibração, poderá direcionar as suas ações e escolhas de forma mais significativa, deixando um legado único e positivo para as gerações futuras. É um momento de introspecção e sabedoria, no qual as suas experiências e aprendizagem acumulada podem ser compartilhados para impactar positivamente a si mesmo e àqueles ao seu redor.",
		"func": "Destino + Caráter",
		"1": "O seu Propósito Divino é trilhar um caminho pioneiro, deixando um legado inspirador e inovador para as gerações futuras. A sua alma anseia por criar algo único - um conceito revolucionário, um produto inovador ou até mesmo uma fundação que promova mudanças positivas na sociedade. Você é destinado a liderar e inspirar outros a seguirem as suas ideias corajosas, tornando-se um farol de inspiração e progresso.",
		"2": "O seu Propósito Divino é ser um agente de paz, conforto e harmonia no ‘Mundo’. A sua alma possui uma sensibilidade única para as necessidades emocionais dos outros e busca nutrir relacionamentos baseados na compreensão mútua e cooperação. Você está destinado a ser um catalisador de reconciliação e união, trazendo equilíbrio e tranquilidade aos corações daqueles ao seu redor.",
		"3": "O seu Propósito Divino é expressar a sua criatividade e imaginação através de formas de expressão artística e criativa. A sua alma é como um portal de inspiração, destinado a produzir ideias, livros, filmes ou qualquer outra forma de arte que entretenha e ilumine as pessoas. A sua jornada é sobre espalhar alegria, despertar a imaginação e tocar os corações de muitos com a sua criatividade única.",
		"4": "O seu Propósito Divino é ser um mestre na arte do ensino, da organização e da administração. A sua alma é guiada pelo desejo de ensinar, exemplificar e estabelecer uma estrutura sólida para aqueles ao seu redor. Você é destinado a deixar um legado bem estruturado e organizado, proporcionando orientação e sabedoria para as gerações futuras.",
		"5": "O seu Propósito Divino é inspirar e ensinar as pessoas a abraçarem a mudança e a adaptabilidade nas suas vidas. A sua alma é como um vento refrescante que sopra pelo mundo, trazendo coragem e ousadia para enfrentar novos desafios. Você é destinado a ser um guia para aqueles que buscam liberdade e transformação.",
		"6": "O seu Propósito Divino é ser um guia amoroso e compassivo para todos que cruzam o seu caminho. A sua alma é como uma fonte inesgotável de apoio emocional e cura, destinada a ser um 'ombro amigo' para aqueles que precisam de conforto. Você é destinado a iluminar o caminho dos outros, oferecendo sabedoria e orientação em tempos de necessidade.",
		"7": "O seu Propósito Divino é buscar a sabedoria universal e espalhar o conhecimento que descobrir. A sua alma é uma buscadora incansável de verdades profundas e significativas, e você é destinado a ser um disseminador de sabedoria para aqueles que têm sede de conhecimento. A sua jornada é sobre explorar, pesquisar e compartilhar descobertas que enriquecem a mente e a alma.",
		"8": "O seu Propósito Divino é deixar uma marca duradoura por meio da sua liderança exemplar e conquistas notáveis na sua carreira ou empreendimentos. A sua alma é impulsionada por uma vontade inabalável de alcançar o sucesso e deixar um legado de realizações notáveis. Você é destinado a inspirar e motivar outros ao redor do mundo através das suas ações e exemplos.",
		"9": "O seu Propósito Divino é deixar um legado humanitário que reflete a sua compaixão e compreensão universal. A sua alma é movida por um profundo senso de empatia e desejo de ajudar aqueles que estão em necessidade. Você é destinado a realizar algo significativo que impacte positivamente a humanidade, trazendo luz e esperança para o ‘Mundo’.",
		"11": "O seu Propósito Divino é elevar a consciência das pessoas e trazer beleza e iluminação para as suas vidas. A sua alma é como um farol de inspiração, destinada a despertar a mente e o coração dos outros para uma visão mais elevada da existência. Você é destinado a ser um agente de mudança positiva, deixando para trás a lembrança de como tocou profundamente a vida das pessoas.",
		"22": "O seu Propósito Divino é criar algo grandioso que beneficie a humanidade e melhore o mundo em que vivemos. A sua alma possui uma visão e capacidade de realização notáveis, sendo destinada a deixar uma marca duradoura no cenário global. Como um construtor dotado de mestria, você é impelido a contribuir para causas maiores e deixar um legado impactante para as futuras gerações."
	}
}
//letters to number map
const letter2number = {
	A: 1,
	B: 2,
	C: 3,
	D: 4,
	E: 5,
	F: 6,
	G: 7,
	H: 8,
	I: 9,
	J: 1,
	K: 2,
	L: 3,
	M: 4,
	N: 5,
	O: 6,
	P: 7,
	Q: 8,
	R: 9,
	S: 1,
	T: 2,
	U: 3,
	V: 4,
	W: 5,
	X: 6,
	Y: 7,
	Z: 8,
	1: 1,
	2: 2,
	3: 3,
	4: 4,
	5: 5,
	6: 6,
	7: 7,
	8: 8,
	9: 9
}
// Vowel/Consonant map
const letterCV = {
	A: 0,
	B: 1,
	C: 1,
	D: 1,
	E: 0,
	F: 1,
	G: 1,
	H: 1,
	I: 0,
	J: 1,
	K: 1,
	L: 1,
	M: 1,
	N: 1,
	O: 0,
	P: 1,
	Q: 1,
	R: 1,
	S: 1,
	T: 1,
	U: 0,
	V: 1,
	W: 1,
	X: 1,
	Y: 0,
	// or 1
	Z: 1,
};

const langMap = {
	en: "",
	es: "-spanish",
	fr: "-french",
	de: "-german",
	pt: "-portuguese",
	it: "-italian",
	tr: "-turkish",
	jp: "-japanese"
};

const plus = "+";
const elem = (id) => document.getElementById(id);
const isMasterNumber = (num) => num == "11" || num == "22";
const element = (id) => document.getElementById(id);
const getValue = (id) => element(id).value || "";
const getNumValue = (id) => parseInt(getValue(id), 10);
const dimensions = ["character", "soul", "agenda", "attitude", "personality", "destiny", "purpose"]
const dimensionsName = ["character", "soul", "agenda"];
const dimensionsMain = ["character", "agenda", "attitude", "personality", "soul"]

const numRpt = (name, number) => `<h2><div class="num c${number}">${number}</div> Personal ${name}</h2>`;

const setValue = (id, value) => {
	elem(id).value = value || "";
};

const nameCalc = (category, name, nums) => {
	var sum = "0";
	if (name && name.replace(/ /, "")) {
		sum = reduceNumber("" + eval(nums.join(plus)));
	}
	return makeReport(category, sum);
}

const reduceNumber = (number) => {
	if (number != "NaN" && number != "undefined") {
		while (number.length > 1 && !isMasterNumber(number)) {
			number = "" + eval(("" + number).split("").join(plus));
		}
	}
	return number;
}

const dateInfo = (month, day, year) => ({
	destiny: makeReport("destiny", reduceNumber(month + day + year)),
	personality: makeReport("personality", day),
	attitude: makeReport("attitude", reduceNumber(month + day)),
})

const fullInfo = (name, month, day, year) => {
	const rpt = dateInfo(month, day, year),
		buffer = nameInfo(name);
	rpt.character = buffer.character;
	rpt.soul = buffer.soul;
	rpt.agenda = buffer.agenda;
	rpt.purpose = purposeInfo(rpt.destiny.number, rpt.character.number);
	return rpt;
}

const trim2C = (n) => {
	const sn = "" + n;
	return sn.length < 2 ? "0" + sn : sn;
};

function calcPerso() {
	const now = new Date();
	const cMonth = now.getMonth() + 1;
	const cYear = now.getFullYear();
	const cDay = now.getDate();
	const m = getNumValue("month"),
		d = getNumValue("day");
	const bDay = new Date(cYear + "-" + trim2C(m) + "-" + trim2C(d));
	const isBeforeBDay = now - bDay < 0;
	let rpt = isBeforeBDay ? "Until your next birthday..." : "Since your birthday...";
	if (m > 0 && d > 0) {
		let pYear = m + d + cYear + (isBeforeBDay ? -1 : 0);
		pYear = reduceNumber("" + pYear);
		rpt += numRpt("Year", pYear);
		let pMonth = pYear + cMonth;
		pMonth = reduceNumber("" + pMonth);
		rpt += numRpt("Month", pMonth);
		let pDay = pMonth + cDay;
		pDay = reduceNumber("" + pDay);
		rpt += numRpt("Day", pDay);
	} else {
		rpt = "";
	}
	element("report1").innerHTML = rpt;
}

function makeReport(category, number) {
	var m = meaning[category];
	return {
		title: m.title,
		category,
		func: m.func,
		number,
		master: isMasterNumber(number),
		meaning: m[number],
		description: m.description,
	};
}

function purposeInfo(destiny, character) {
	var sumOp = destiny && character ? destiny + plus + character : "",
		sum = reduceNumber(sumOp ? "" + eval(sumOp) : "");
	return makeReport("purpose", sum);
}

function nameInfo(name) {
	var uName = name.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toUpperCase(),
		uNameV = "",
		uNameC = "",
		num = [],
		numV = [],
		numC = [],
		ln = uName.length,
		prevLetterCat = null;
	const addV = (letter, lNum) => {
		numV.push(lNum);
		uNameV += letter;
		prevLetterCat = 0;
	}
	const addC = (letter, lNum) => {
		numC.push(lNum);
		uNameC += letter;
		prevLetterCat = 1;
	}
	if (name) {
		for (var i = 0; i < ln; i++) {
			var letter = uName[i],
				lNum = letter2number[letter] || 0,
				cv = letterCV[letter];
			num.push(lNum);
			if (cv === 1) {
				addC(letter, lNum);
			} else if (cv === 0) {
				if (letter === "Y") {
					if (prevLetterCat === 1) {
						addV(letter, lNum);
					} else if (i < ln - 1) {
						nextLetterCat = letterCV[uName[i + 1]];
						if (nextLetterCat === 1) {
							addV(letter, lNum);
						} else {
							addC(letter, lNum);
						}
					} else {
						addV(letter, lNum);
					}
				} else {
					addV(letter, lNum);
				}
			} else {
				addC(letter, 0);
				addV(letter, 0);
				prevLetterCat = null;
			}
		}
		return {
			character: nameCalc("character", uName, num),
			soul: nameCalc("soul", uNameV, numV),
			agenda: nameCalc("agenda", uNameC, numC),
		};
	}
}

function dateReport(month, day, year) {
	const cats = ["destiny", "personality", "attitude"];
	const d = parseInt(day);
	if (month && day && year && d > 0 && d < 32 && parseInt(year) > 0) {
		var info = dateInfo(month, day, year);
		cats.forEach((cat) => (myNumbers[cat] = info[cat]));
		dest = info.destiny.number;
		return cats.map((id) => htmlSection(info[id])).join("");
	}
	dest = "";
	cats.forEach((cat) => (myNumbers[cat] = null));
	myNumbers.purpose = null;
	return "";
}

function nameReport(name) {
	if (name) {
		var info = nameInfo(name);
		dimensionsName.forEach((cat) => (myNumbers[cat] = info[cat]));
		char = info.character.number;
		return dimensionsName.map(id => htmlSection(info[id])).join("");
	}
	char = "";
	cats.forEach((cat) => (myNumbers[cat] = null));
	myNumbers.purpose = null;
	return "";
}

function purposeReport() {
	if (showPurpose) {
		const p = purposeInfo(dest, char);
		myNumbers.purpose = p;
		return dest && char ? htmlSection(p) : "";
	}
	myNumbers.purpose = null;
	return "";
}

function htmlMeaning(number, meaning) {
	return ('<div class="meaning"><div class="num c' + number + '">' + number + "</div><div>" + (meaning || "N/A") + "</div></div>");
}

function htmlSection(rpt) {
	html = `<a name="${rpt.category}"></a><article class="artnum c${rpt.number}">
    <h2>${rpt.title} = ${rpt.number}</h2>
    <div class="desc">${rpt.description}</div>`;
	if (rpt.meaning) {
		html += '<div class="calc">' + (rpt.master ? "<div>" + meaning.master + "</div>" : "") + htmlMeaning(rpt.number, rpt.meaning);
	}
	html += "</article>";
	return html;
}

function calcName(skipExtra) {
	const name = getValue("name");
	//  document.title = name ? name + ' - '+ mn : mn
	elem("report1").innerHTML = nameReport(name);
	if (!skipExtra) {
		calcExtra();
	}
}

function calcBDay() {
	elem("report2").innerHTML = dateReport(getValue("month"), getValue("day"), getValue("year"));
	calcExtra();
}

function calcExtra() {
	if (showPurpose) {
		var contentToAdd = '<div style="height:25px" aria-hidden="true" class="wp-block-spacer"></div><div id="trx_sc_button_1209871697" class="sc_item_button sc_button_wrap"><a onclick="captureElement(\'post-3967\')" class="sc_button sc_button_bordered sc_button_size_small sc_button_icon_left color_style_dark"><span class="sc_button_text"><span class="sc_button_title">GUARDAR</span></span><!-- /.sc_button_text --></a><!-- /.sc_button --></div>';
		// Concatenate the new content with the current content
		var newContent = purposeReport(getValue("name")) + contentToAdd;
		// Update the content of the "report3" element with the new content
		elem("report3").innerHTML = newContent;
	}
	// - Numbers on star
	elem("star-holder").innerHTML = Object.keys(myNumbers).map((cat) => {
		if (myNumbers[cat]) {
			const num = myNumbers[cat].number;
			return (`<a href="#${cat}"><div class="${cat} num c${num}">${num}<span>${myNumbers[cat].title}</span></div></a>`);
		}
		return "";
	}).join("");
}

function checkInfo() {
	const queryString = window.location.search;
	if (queryString) {
		const urlParams = new URLSearchParams(queryString);
		const fields = ["name", "month", "day", "year"];
		let hasValue = false;
		fields.forEach((fid) => {
			const param = urlParams.get(fid);
			if (param) {
				setValue(fid, param);
				hasValue = true;
			}
		});
		if (hasValue) {
			calcName(true);
			calcBDay();
		}
	}
}

function goToLanguage(evt, language) {
	evt.stopPropagation();
	let url = "index" + langMap[language] + ".html?";
	const props = ["name", "month", "day", "year"];
	props.forEach((prop) => {
		const pv = getValue(prop);
		if (pv) {
			url += prop + "=" + pv + "&";
		}
	});
	window.location.replace(url);
}