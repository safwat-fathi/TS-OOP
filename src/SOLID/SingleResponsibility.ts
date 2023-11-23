// * Before following SRP
// interface Note {
//   id: string;
//   text: string;
// }

// export class Notebook {
//   public readonly notes: Note[];
//   private password: string;
//   private theme: "LIGHT" | "DARK";
//   private fontSize: number;

//   constructor() {
//     this.notes = [];
//     this.password = "";
//     this.theme = "LIGHT";
//     this.fontSize = 14;
//   }

//   public createNewNote(text: string = ""): void {
//     const newNote: Note = { id: new Date().toISOString(), text };
//     this.notes.push(newNote);
//   }

//   public deleteAllNotes(): void {
//     this.notes.length = 0;
//   }

//   public deleteNote(noteId: string): void {
//     const targetNote = this.notes.find(({ id }) => id === noteId);

// 		if (targetNote) {
// 			const targetNoteIndex = this.notes.indexOf(targetNote);
// 			this.notes.splice(targetNoteIndex, 1);
// 		}
//   }

//   public showNote(noteId: string): void {
//     const targetNote = this.notes.find(({ id }) => id === noteId);
//     console.log(targetNote?.text);
//   }

//   public editNote(noteId: string, newText: string): void {
//     const targetNote = this.notes.find(({ id }) => id === noteId);

// 		if (targetNote) {
// 			const targetNoteIndex = this.notes.indexOf(targetNote);
// 			this.notes[targetNoteIndex].text = newText;
// 		}
//   }

//   public changePassword(newPassword: string): void {
//     if (newPassword.length >= 8 && newPassword.length <= 32) {
//       this.password = newPassword;
//     }
//   }

//   public toggleTheme(): void {
//     if (this.theme === "LIGHT") {
//       this.theme = "DARK";
//     } else {
//       this.theme = "LIGHT";
//     }
//   }

//   public changeFontSize(newFontSize: number): void {
//     if (newFontSize < 8) {
//       this.fontSize = 8;
//     } else if (newFontSize > 60) {
//       this.fontSize = 60;
//     } else {
//       this.fontSize = Math.floor(newFontSize);
//     }
//   }
// }

// * After following SRP
export class Note {
  public readonly id: string;
  private text: string;

  constructor(text: string) {
    this.id = new Date().toISOString();
    this.text = text;
  }

  public show(): void {
    console.log(this.text);
  }

  public edit(newText: string): void {
    this.text = newText;
  }
}

class Setting {
  private password: string | null;
  private theme: "LIGHT" | "DARK";
  private fontSize: number;

  constructor() {
    this.password = null;
    this.theme = "LIGHT";
    this.fontSize = 14;
  }

  private validatePassword(password: string): boolean {
    if (password.length < 8) {
      return false;
    } else if (password.length > 32) {
      return false;
    } else {
      return true;
    }
  }

  public changePassword(newPassword: string): void {
    if (this.validatePassword(newPassword)) {
      this.password = newPassword;
    }
  }

  public toggleTheme(): void {
    if (this.theme === "LIGHT") {
      this.theme = "DARK";
    } else {
      this.theme = "LIGHT";
    }
  }

  public changeFontSize(newFontSize: number): void {
    if (newFontSize < 8) {
      this.fontSize = 8;
    } else if (newFontSize > 60) {
      this.fontSize = 60;
    } else {
      this.fontSize = Math.floor(newFontSize);
    }
  }
}

export class Notebook {
  public readonly notes: Note[];
  public readonly setting: Setting;

  constructor() {
    this.notes = [];
    this.setting = new Setting();
  }

  public getNoteById(noteId: string): Note | undefined {
    return this.notes.find(({ id }) => id === noteId);
  }

  public createNewNote(newNote: Note): void {
    this.notes.push(newNote);
  }

  public deleteAllNotes(): void {
    this.notes.length = 0;
  }

  public deleteNote(noteId: string): void {
    const targetNote = this.getNoteById(noteId);

    if (targetNote) {
      const targetNoteIndex = this.notes.indexOf(targetNote);
      this.notes.splice(targetNoteIndex, 1);
    }
  }
}
