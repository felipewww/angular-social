import {Component, forwardRef, Input} from '@angular/core'

@Component({
    selector: 'app-comment-tree',
    template: `
  <div>{{node.name}}</div>
  <ul>
    <li *ngFor="let node of node.children">
      <tree-node  [node]="node"></tree-node>
    </li>
  </ul>
`
})
export class TreeNode {
    @Input() node;
}
