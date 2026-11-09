import { useState, type MouseEvent, type ReactNode } from 'react'
import { ActionBar } from '../components/ActionBar'
import { Button } from '../components/Button'
import { Frame47 } from '../components/Frame47'
import { Input } from '../components/Input'
import { ServiceCard } from '../components/ServiceCard'
import { SummaryRow } from '../components/SummaryRow'
import { Tag } from '../components/Tag'
import { TimeSlot } from '../components/TimeSlot'
import { TopBar } from '../components/TopBar'
import './ComponentsPage.css'

// Overview of every component, in each of its Figma states, to check against the design.
// Open http://localhost:5173/#components

const KIT_FILE = 'https://www.figma.com/design/rQ3qSpvDRSVPEuvmNjpLse/'
const SLOPPY_FILE = 'https://www.figma.com/design/tlmd8dLSEnSfJBmT7vnYp8/'
const figmaLink = (file: string, nodeId: string) => `${file}?node-id=${nodeId.replace(':', '-')}`

export function ComponentsPage() {
  // Interactive examples, so you can also try the behaviour
  const [service, setService] = useState('flat-tyre')
  const [time, setTime] = useState('16:30')

  return (
    <main className="components-page">
      <header className="components-page__header">
        <h1 className="components-page__title">Components</h1>
        <p className="components-page__intro">
          Every component in <code>src/components</code>, in each state from the Figma file. Use
          the Figma link on each one to compare.
        </p>
        <nav aria-label="Components">
          <ul className="components-page__toc">
            {['Top bar', 'Button', 'Tag', 'Time slot', 'Input', 'Service card', 'Summary row', 'Action bar', 'Frame 47'].map((name) => (
              <li key={name}>
                <a href={`#components/${slug(name)}`} onClick={(e) => scrollToSection(e, name)}>
                  {name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      <Section name="Top bar" file="TopBar.tsx" figma={figmaLink(KIT_FILE, '6:24')}>
        <Specimen label="Default" wide>
          <TopBar title="Book a repair" step="Step 1 of 3" />
        </Specimen>
      </Section>

      <Section name="Button" file="Button.tsx" figma={figmaLink(KIT_FILE, '3:33')}>
        <Specimen label="Variant=Primary">
          <Button label="Book this repair" variant="primary" />
        </Specimen>
        <Specimen label="Variant=Secondary">
          <Button label="Book this repair" variant="secondary" />
        </Specimen>
      </Section>

      <Section name="Tag" file="Tag.tsx" figma={figmaLink(KIT_FILE, '3:27')}>
        <Specimen label="Default">
          <Tag label="30 min" />
        </Specimen>
      </Section>

      <Section name="Time slot" file="TimeSlot.tsx" figma={figmaLink(KIT_FILE, '6:14')}>
        <Specimen label="State=Default">
          <TimeSlot name="slot-default" value="16:30" label="16:30" />
        </Specimen>
        <Specimen label="State=Selected">
          <TimeSlot name="slot-selected" value="16:30" label="16:30" selected />
        </Specimen>
        <Specimen label="State=Disabled">
          <TimeSlot name="slot-disabled" value="16:30" label="16:30" disabled />
        </Specimen>
        <Specimen label="Try it: pick a time" full>
          <div className="components-page__row" role="radiogroup" aria-label="Try it: pick a time">
            {['12:00', '14:00', '16:30', '17:30'].map((t) => (
              <TimeSlot key={t} name="slot-try" value={t} label={t} selected={time === t} onSelect={setTime} />
            ))}
          </div>
        </Specimen>
      </Section>

      <Section name="Input" file="Input.tsx" figma={figmaLink(KIT_FILE, '6:23')}>
        <Specimen label="State=Default" wide>
          <Input label="Your name" placeholder="First and last name" />
        </Specimen>
        <Specimen label="State=Focus (click into the field)" wide>
          <Input label="Your name" placeholder="First and last name" />
        </Specimen>
        <Specimen label="State=Error" wide>
          <Input label="Your name" placeholder="First and last name" error="Enter your name" />
        </Specimen>
      </Section>

      <Section name="Service card" file="ServiceCard.tsx" figma={figmaLink(KIT_FILE, '2003:33')}>
        <Specimen label="State=Default" wide>
          <ServiceCard
            name="card-default"
            value="flat-tyre"
            title="Flat tyre repair"
            price="€15"
            description="Tube or tyre swap, any wheel size."
            tags={['30 min']}
          />
        </Specimen>
        <Specimen label="State=Selected" wide>
          <ServiceCard
            name="card-selected"
            value="flat-tyre"
            title="Flat tyre repair"
            price="€15"
            description="Tube or tyre swap, any wheel size."
            tags={['30 min']}
            selected
          />
        </Specimen>
        <Specimen label="Try it: hover and pick a service" wide>
          <div className="components-page__stack" role="radiogroup" aria-label="Try it: hover and pick a service">
            <ServiceCard
              name="card-try"
              value="flat-tyre"
              title="Flat tyre repair"
              price="€15"
              description="Tube or tyre swap, any wheel size."
              tags={['30 min']}
              selected={service === 'flat-tyre'}
              onSelect={setService}
            />
            <ServiceCard
              name="card-try"
              value="brakes"
              title="Brake check and adjust"
              price="€25"
              description="Pads, cables and alignment."
              tags={['45 min']}
              selected={service === 'brakes'}
              onSelect={setService}
            />
          </div>
        </Specimen>
      </Section>

      <Section name="Summary row" file="SummaryRow.tsx" figma={figmaLink(KIT_FILE, '2003:34')}>
        <Specimen label="Default" wide>
          <dl className="components-page__stack">
            <SummaryRow label="Service" value="Flat tyre repair" />
          </dl>
        </Specimen>
      </Section>

      <Section name="Action bar" file="ActionBar.tsx" figma={figmaLink(KIT_FILE, '2003:37')}>
        <Specimen label="Default" wide>
          <ActionBar label="Book this repair" />
        </Specimen>
      </Section>

      <Section
        name="Frame 47"
        file="Frame47.tsx"
        figma={figmaLink(SLOPPY_FILE, '4:6')}
        note="The “sloppy” demo card, coded exactly as it is in Figma: fixed positions, hard-coded values, no real button."
      >
        <Specimen label="As designed">
          <Frame47 />
        </Specimen>
      </Section>
    </main>
  )
}

function slug(name: string) {
  return name.toLowerCase().replace(/\s+/g, '-')
}

// Jump to a section without leaving the #components page
function scrollToSection(event: MouseEvent, name: string) {
  event.preventDefault()
  document.getElementById(slug(name))?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

type SectionProps = {
  name: string
  file: string
  figma: string
  note?: string
  children: ReactNode
}

function Section({ name, file, figma, note, children }: SectionProps) {
  return (
    <section className="components-page__section" id={slug(name)} aria-labelledby={`${slug(name)}-title`}>
      <div className="components-page__section-header">
        <h2 className="components-page__section-title" id={`${slug(name)}-title`}>
          {name}
        </h2>
        <code className="components-page__file">src/components/{file}</code>
        <a className="components-page__figma-link" href={figma} target="_blank" rel="noreferrer">
          Open in Figma
        </a>
      </div>
      {note && <p className="components-page__note">{note}</p>}
      <div className="components-page__specimens">{children}</div>
    </section>
  )
}

type SpecimenProps = {
  label: string
  /** Give the component the width of the mobile frame (390px) */
  wide?: boolean
  /** Take the whole row */
  full?: boolean
  children: ReactNode
}

function Specimen({ label, wide, full, children }: SpecimenProps) {
  const classes = ['components-page__specimen', wide && 'components-page__specimen--wide', full && 'components-page__specimen--full']
    .filter(Boolean)
    .join(' ')
  return (
    <figure className={classes}>
      <figcaption className="components-page__specimen-label">{label}</figcaption>
      <div className="components-page__stage">{children}</div>
    </figure>
  )
}
