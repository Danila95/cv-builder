import { useRef, useState } from 'react'
import { Header, Footer, Avatar, Range, Title, Descr } from './components'
import { useReactToPrint } from 'react-to-print'
import styled from 'styled-components'
// icons:
import { ReactComponent as MailIcon } from './assets/img/icons/mail.svg'
import { ReactComponent as PhoneIcon } from './assets/img/icons/phone.svg'

const Wrapper = styled.div`
	max-width: 1200px;
	margin: 2rem auto;
	padding: 3rem 2rem;
	background-color: white;
	border: 1px solid #ececec;
	box-shadow: 5px 7px 10px 4px #ececec;
	border-radius: 14px;
`

const Row = styled.section`
	display: flex;
	flex-wrap: wrap;
	align-items: ${props => (props.itemsCenter ? 'center' : 'start')};
	margin: 2rem 0;
`

const Sidebar = styled.div`
	flex: 1;
	margin-right: 1rem;
`

const Content = styled.div`
	flex: 3;
	margin-left: 1rem;
`

function App() {
	const [skillsCounter, setSkillsCounter] = useState(1)
	const [worksCounter, setWorksCounter] = useState(1)

	const componentRef = useRef()
	const handlePrintClick = useReactToPrint({
		content: () => componentRef.current
	})

	return (
		<div className='ui-wrapper'>
			<Header onClick={handlePrintClick} />
			<div className='ui-content-wrapper'>
				<Wrapper>
					<div className='ui-container' ref={componentRef}>
						<Row itemsCenter>
							<Sidebar>
								<Avatar />
							</Sidebar>
							<Content>
								<Title size='3'>Vasily Pupkin</Title>
								<Descr>Experienced Software & Machine Learning Engineer with a demonstrated history.</Descr>
							</Content>
						</Row>

						<Row>
							<Sidebar>
								<Title size='3' isUppercase contentEditable={false}>
									About me:
								</Title>
								<Descr>Software Engineer</Descr>
								<Descr isSecondary>Moscow-city, Moscow region | vk.ru</Descr>

								<Descr isPrimary style={{ marginTop: '2rem' }}>
									<MailIcon style={{ marginRight: '0.6rem' }} />
									vasily-pupkin@mail.ru
								</Descr>
								<Descr isPrimary>
									<PhoneIcon style={{ marginRight: '0.6rem' }} />
									+8 (800) 555-35-35
								</Descr>
							</Sidebar>

							<Content>
								<Title size='3' isUppercase contentEditable={false}>
									Education:
								</Title>
								<Descr>Lomonosov Moscow State University - Machine learning and big data management</Descr>

								<Title
									size='3'
									isUppercase
									isShowButton
									contentEditable={false}
									onClick={() => setWorksCounter(worksCounter + 1)}
									style={{ marginTop: '3.6rem' }}
								>
									Work experience:
								</Title>

								{new Array(worksCounter).fill(1).map((_, i) => (
									<Descr key={i}>{i + 1}. Solutions Architect, Stripe.</Descr>
								))}

								<Title
									size='3'
									isUppercase
									isShowButton
									contentEditable={false}
									onClick={() => setSkillsCounter(skillsCounter + 1)}
									style={{ marginTop: '3rem' }}
								>
									Skills:
								</Title>

								{new Array(skillsCounter).fill(1).map((_, i) => (
									<Range key={i} />
								))}
							</Content>
						</Row>
					</div>
				</Wrapper>
			</div>
			<footer>
				<Footer />
			</footer>
		</div>
	)
}

export default App
