import { SystemResourceModel } from '../system-assets-role-to-object-procure/system-resource-model';

// TODO: replace this with real data from your application


export const EXAMPLE_PRO_CONFIG_DATA: SystemResourceModel[] = [    
    { SystemResourceID: "1", SystemResourceName: 'New_Purchase_Order', SystemResourceDesc: 'Allows user to create new purchase order.' },
    { SystemResourceID: "2", SystemResourceName: 'View_Existing_POs', SystemResourceDesc: 'Allows user to view existing purchase orders.' },
    { SystemResourceID: "3", SystemResourceName: 'PO_Approval', SystemResourceDesc: 'Approvers can review order details, make comments, and approve or reject the purchase order.' },
    { SystemResourceID: "4", SystemResourceName: 'PO_Tracking', SystemResourceDesc: 'Allows users to track the status of purchase orders in real-time.' },
    { SystemResourceID: "5", SystemResourceName: 'Supplier_Management', SystemResourceDesc: 'Allows users to search, view, and manage supplier information, including contact details and performance metrics.' },
    { SystemResourceID: "6", SystemResourceName: 'Supplier_Performance_Evaluation ', SystemResourceDesc: 'Allows users to evaluate and track the performance of suppliers.' },
    { SystemResourceID: "7", SystemResourceName: 'Catalog_Management', SystemResourceDesc: 'Users can browse, search, and select items from approved catalogs.' },
    
];
