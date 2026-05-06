# 🤖 AI Agent Robin: Dynamic UI Engine (POC)

Dit project is een Proof of Concept (POC) voor de front-end architectuur van **AI Agent Robin**. Het demonstreert hoe een conversational interface naadloos kan overgaan in interactieve visuele inzichten door middel van **Server-Driven UI**.

---

## 📋 Overzicht & Visie
Traditionele interfaces zijn vaak een doolhof van opties. Voor Robin verschuift de rol van het scherm: de interface levert inzichten en acties op exact het juiste moment. Wanneer de AI-agent merkt dat tekstuele uitleg niet volstaat, genereert de backend een instructie om specifieke visuele componenten te renderen.

### Belangrijkste Concepten:
- **Generative UI**: De interface wordt "on the fly" opgebouwd op basis van de dialoog.
- **Contextuele Widgets**: In plaats van een volledig dashboard, worden alleen de relevante knoppen, grafieken of sliders getoond.
- **Seamless Integration**: Chat en traditionele applicatie-functionaliteit versmelten tot één vloeiende ervaring.

---

## 🛠 Technische Implementatie: UIOrchestrator

De kern van dit project is de `UiOrchestrator`. Deze class gebruikt Angular's `ViewContainerRef` om dynamisch componenten te instantiëren op basis van een JSON-schema.

### 1. Het JSON Schema (De AI Instructie)
De backend (of de AI-engine) stuurt een gestructureerde lijst met instructies:

```json
[
  {
    "type": "text",
    "data": { "text": "Hier is een overzicht van je nieuwe maandlasten:" }
  },
  {
    "type": "chart",
    "data": { "title": "Hypotheek Prognose", "dataPoints": 12 }
  }
]
```
2. De Flow

    Registry Lookup: De Orchestrator matcht het type (bijv. "chart") aan een Angular Component Class (WidgetChartComponent) via een centrale WIDGET_REGISTRY.

    Dynamic Injection: De ViewContainerRef.createComponent() methode wordt aangeroepen om het component in de DOM te plaatsen.

    State Sync: De data uit de JSON wordt via Object.assign direct gekoppeld aan de @Input() properties van het nieuw aangemaakte component.

🏗 Architectuur Details
Component Registry

De mapping tussen JSON en Code is strikt gescheiden, wat zorgt voor een Open-Closed Principle: nieuwe widgets kunnen worden toegevoegd zonder de engine te wijzigen.
Performance & Schaalbaarheid

    OnPush Change Detection: Alle widgets gebruiken OnPush om onnodige re-renders in complexe dashboards te voorkomen.

    Standalone Components: Geen overhead van NgModules; elk component is een onafhankelijke bouwsteen.

    Nx Monorepo: Gebruik van aliassen (@UI-Engine/components) voor schone imports en herbruikbaarheid over verschillende apps.

🚀 Voorbeeld Scenario: De Verbouwingscheck

    De gebruiker vraagt in de chat: "Kan ik €30.000 bijlenen voor een nieuwe keuken?"

    Robin reageert niet met tekst, maar stuurt een chart en een slider widget.

    De gebruiker schuift met de slider; de grafiek in de chat-bubble update real-time.

    De staat van de widget wordt teruggekoppeld aan de AI voor de volgende stap in het gesprek.

🛠 Roadmap & Toekomstige Verbeteringen

    [ ] Lazy Loading: Gebruik van import() om widget-code pas te downloaden wanneer de AI deze daadwerkelijk aanroept.

    [ ] Bi-directionele Events: Het mappen van @Output() events (zoals kliks of slider-updates) naar acties voor de AI-agent.

    [ ] State Management: Integratie met een centrale store om de status van de gegenereerde UI te synchroniseren met de chat-historie.

⚡ Quick Start

    Installeer afhankelijkheden: npm install

    Start de applicatie: npx nx serve UI-Engine

    Klik op "Simuleer nieuwe AI instructie" om te zien hoe de ViewContainerRef de UI direct transformeert op basis van nieuwe data.