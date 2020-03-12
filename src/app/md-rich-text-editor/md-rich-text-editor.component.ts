import {AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {RichTextEditorComponent} from "@syncfusion/ej2-angular-richtexteditor";


@Component({
  selector: 'app-md-rich-text-editor',
  templateUrl: './md-rich-text-editor.component.html',
  styleUrls: ['./md-rich-text-editor.component.css']
})
export class MdRichTextEditorComponent implements OnInit, AfterViewInit {
  public tools: object = {
    items: ['Undo', 'Redo', '|',
      'Bold', 'Italic', 'Underline', 'StrikeThrough', '|',
      'FontName', 'FontSize', 'FontColor', 'BackgroundColor', '|',
      'SubScript', 'SuperScript', '|',
      'LowerCase', 'UpperCase', '|',
      'Formats', 'Alignments', '|', 'OrderedList', 'UnorderedList', '|',
      'Indent', 'Outdent', '|', 'CreateLink',
      'Image', '|', 'ClearFormat', 'Print', 'SourceCode', '|', 'FullScreen']
  };
  public iframe: object = {enable: true};
  public height = 500;

  @ViewChild('toolsRTE', {static: false})
  public rteObj: RichTextEditorComponent;
  public textArea: HTMLElement;
  @Input('ngtemplatevalue') ngtemplatevalue;


  constructor() {
  }

  ngOnInit() {

  }

  clickMehere() {
    console.log(this.rteObj.getHtml());
  }

  ngAfterViewInit(): void {
    const rteObj: RichTextEditorComponent = this.rteObj;
    setTimeout(() => {
      this.textArea = rteObj.contentModule.getEditPanel() as HTMLElement;
    }, 600);
    this.rteObj.value = '<p>The RichTextEditor component is WYSIWYG ("what you see is what you get") editor that provides the best user\n' +
      '      experience to create and update the content.\n' +
      '      Users can format their content using standard toolbar commands.</p>\n' +
      '    <p><b>Key features:</b></p>\n' +
      '    <ul>\n' +
      '      <li><p>Provides &lt;IFRAME&gt; and &lt;DIV&gt; modes.</p></li>\n' +
      '      <li><p>Capable of handling markdown editing.</p></li>\n' +
      '      <li><p>Contains a modular library to load the necessary functionality on demand.</p></li>\n' +
      '      <li><p>Provides a fully customizable toolbar.</p></li>\n' +
      '      <li><p>Provides HTML view to edit the source directly for developers.</p></li>\n' +
      '      <li><p>Supports third-party library integration.</p></li>\n' +
      '      <li><p>Allows preview of modified content before saving it.</p></li>\n' +
      '      <li><p>Handles images, hyperlinks, video, hyperlinks, uploads, etc.</p></li>\n' +
      '      <li><p>Contains undo/redo manager. </p></li>\n' +
      '      <li><p>Creates bulleted and numbered lists.</p></li>\n' +
      '    </ul>';
  }
}
