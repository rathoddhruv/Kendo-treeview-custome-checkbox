import { Component } from '@angular/core';
import { CheckableSettings, CheckMode, SelectionMode } from '@progress/kendo-angular-treeview';
import { of, Observable } from 'rxjs';

@Component({
    selector: 'my-app',
    styles: [`.right { margin-right: 5px }`],
    template: `
        <fieldset>
            <legend>Check Settings</legend>
            <div class="k-form-field" style="margin-bottom: 1em;">
                <span class="right"><strong>Mode:</strong></span>
                <input type="radio" name="checkMode" id="singleCheck" kendoRadioButton value="single" class="right"
                    [(ngModel)]="checkMode" />
                <label class="k-radio-label right" for="singleCheck">Single</label>
                <input type="radio" name="checkMode" id="multipleCheck" value="multiple" kendoRadioButton
                    [(ngModel)]="checkMode" />
                <label class="k-radio-label" for="multipleCheck">Multiple</label>
            </div>
            <div  *ngIf="checkMode === 'multiple'">
                <label class="k-form-field right">
                    <input
                        type="checkbox"
                        id="enableCheck"
                        kendoCheckBox
                        [(ngModel)]="enableCheck"
                    />
                    <label class="k-checkbox-label" for="enableCheck">Enable</label>
                </label>
                <label class="k-form-field right">
                    <input
                        type="checkbox"
                        id="checkChildren"
                        kendoCheckBox
                        [(ngModel)]="checkChildren"
                    />
                    <label class="k-checkbox-label" for="checkChildren">Check all children</label>
                </label>
                <label class="k-form-field right">
                    <input
                        type="checkbox"
                        id="checkDisabledChildren"
                        kendoCheckBox
                        [(ngModel)]="checkDisabledChildren"
                    />
                    <label class="k-checkbox-label" for="checkDisabledChildren">Check disabled children</label>
                </label>
                <label class="k-form-field right">
                    <input
                        type="checkbox"
                        id="checkParents"
                        kendoCheckBox
                        [(ngModel)]="checkParents"
                    />
                    <label class="k-checkbox-label" for="checkParents">Check all parents when children are checked</label>
                </label>
                <label class="k-form-field right">
                    <input
                        type="checkbox"
                        id="checkOnClick"
                        kendoCheckBox
                        [(ngModel)]="checkOnClick"
                    />
                    <label class="k-checkbox-label" for="checkOnClick">Check the node on click</label>
                </label>
                <label class="k-form-field right">
                    <input
                        type="checkbox"
                        id="uncheckCollapsedChildren"
                        kendoCheckBox
                        [(ngModel)]="uncheckCollapsedChildren"
                    />
                    <label class="k-checkbox-label" for="uncheckCollapsedChildren">Uncheck collapsed children</label>
                </label>
            </div>
        </fieldset>
        <br />
        <kendo-treeview
            [nodes]="data"
            [children]="children"
            [hasChildren]="hasChildren"
            textField="text"

            [kendoTreeViewCheckable]="checkableSettings"
            [(checkedKeys)]="checkedKeys"
            kendoTreeViewExpandable
        >
        </kendo-treeview>
        <div style="margin: 10px 0">
            <i>Press SPACE to check/uncheck the active node</i>
            <div class="example-config">
                Checked keys: {{checkedKeys.join(",")}}
            </div>
        </div>
  `
})
export class AppComponent {
    public checkedKeys: string[] = ['1'];

    public enableCheck = true;
    public checkChildren = true;
    public checkDisabledChildren = false;
    public checkParents = true;
    public checkOnClick = false;
    public uncheckCollapsedChildren = false;
    public checkMode: CheckMode = 'multiple';
    public selectionMode: SelectionMode = 'single';

    public get checkableSettings(): CheckableSettings {
        return {
            checkChildren: this.checkChildren,
            checkDisabledChildren: this.checkDisabledChildren,
            checkParents: this.checkParents,
            enabled: this.enableCheck,
            mode: this.checkMode,
            checkOnClick: this.checkOnClick,
            uncheckCollapsedChildren: this.uncheckCollapsedChildren
        };
    }

    public data: any[] = [
        {
          text: 'Furniture', items: [
            { text: 'Tables & Chairs' },
            { text: 'Sofas' },
            {
              text: 'Occasional Furniture', items: [{
                text: 'Decor', items: [
                  { text: 'Bed Linen' },
                  { text: 'Curtains & Blinds' }
                ]
              }]
            }
          ]
        },
        { text: 'Decor' },
        { text: 'Outdoors' }
    ];

    public children = (dataItem: any): Observable<any[]> => of(dataItem.items);
    public hasChildren = (dataItem: any): boolean => !!dataItem.items;
}
