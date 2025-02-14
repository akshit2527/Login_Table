import { Component } from '@angular/core';

@Component({
  selector: 'app-attack-table',
  templateUrl: './attack-table.component.html',
  styleUrls: ['./attack-table.component.css']
})
export class AttackTableComponent {
  
  // ✅ Attack Entries List
  attackEntries: { id: number; type: string; agents: string; subAgents: string }[] = [
    { id: 1, type: 'SQL Injection', agents: 'Hacker', subAgents: 'Automated Scripts' },
    { id: 2, type: 'Phishing', agents: 'Cybercriminals', subAgents: 'Fake Emails' }
  ];

  // ✅ New Entry Model (Fixes 'newEntry' Error)
  newEntry: { type: string; agents: string; subAgents: string } = { type: '', agents: '', subAgents: '' };

  // ✅ Method to Add a New Entry
  addEntry() {
    if (this.newEntry.type.trim() && this.newEntry.agents.trim() && this.newEntry.subAgents.trim()) {
      this.attackEntries.push({
        id: this.attackEntries.length + 1,
        type: this.newEntry.type,
        agents: this.newEntry.agents,
        subAgents: this.newEntry.subAgents
      });
      this.newEntry = { type: '', agents: '', subAgents: '' }; // Clear input fields
    }
  }

  // ✅ Method to Delete an Entry (Fixes 'deleteEntry' Error)
  deleteEntry(id: number) {
    this.attackEntries = this.attackEntries.filter(entry => entry.id !== id);
  }

  // ✅ Method to Cancel Adding a New Entry
  cancelEntry() {
    this.newEntry = { type: '', agents: '', subAgents: '' };
  }
}
