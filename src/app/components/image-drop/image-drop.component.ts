import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { ClearImage } from '../../store/main.actions';
import { Store } from '@ngxs/store';

@Component({
  selector: 'app-image-drop',
  standalone: false,
  templateUrl: './image-drop.component.html',
  styleUrl: './image-drop.component.css'
})
export class ImageDropComponent {
  @Input() label: string = 'Drop an image here or click to browse';
  @Output() fileDropped = new EventEmitter<File>();

  isDragOver = false;
  previewUrl: SafeUrl | null = null;
  fileName: string | null = null;

  constructor(private sanitizer: DomSanitizer, private store: Store) {}

  onDragOver(event: DragEvent): void {
    event.preventDefault();
    event.stopPropagation();
    this.isDragOver = true;
  }

  onDragLeave(event: DragEvent): void {
    event.preventDefault();
    event.stopPropagation();
    this.isDragOver = false;
  }

  onDrop(event: DragEvent): void {
    event.preventDefault();
    event.stopPropagation();
    this.isDragOver = false;
    const file = event.dataTransfer?.files[0];
    if (file && file.type.startsWith('image/')) {
      this.processFile(file);
    }
  }

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    const file = input.files?.[0];
    if (file) {
      this.processFile(file);
    }
    input.value = '';
  }

  clearImage(event: Event): void {
    event.stopPropagation();
    this.previewUrl = null;
    this.fileName = null;
    this.store.dispatch(new ClearImage());
  }

  private processFile(file: File): void {
    this.fileName = file.name;
    const objectUrl = URL.createObjectURL(file);
    this.previewUrl = this.sanitizer.bypassSecurityTrustUrl(objectUrl);
    this.fileDropped.emit(file);
  }
}
