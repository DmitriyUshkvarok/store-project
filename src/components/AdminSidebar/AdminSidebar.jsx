'use client';
import { usePathname } from 'next/navigation';
import {
  PanelCategoryList,
  PanelCategoryListItem,
  StyleLink,
  StyleBsFillGearFill,
} from './AdminSidebar.styled';

const AdminSidebar = () => {
  const pathname = usePathname();
  return (
    <>
      <PanelCategoryList>
        <PanelCategoryListItem>
          <StyleLink
            className={pathname === '/admin/orders' ? 'active' : ''}
            href="/admin/orders"
          >
            Замовлення
          </StyleLink>
          <StyleBsFillGearFill />
        </PanelCategoryListItem>
        <PanelCategoryListItem>
          <StyleLink
            className={pathname === '/admin/catalog-management' ? 'active' : ''}
            href="/admin/catalog-management"
          >
            Керування Каталогом
          </StyleLink>
          <StyleBsFillGearFill />
        </PanelCategoryListItem>
        <PanelCategoryListItem>
          <StyleLink
            className={
              pathname === '/admin/category-management' ? 'active' : ''
            }
            href="/admin/category-management"
          >
            Додати товар
          </StyleLink>
          <StyleBsFillGearFill />
        </PanelCategoryListItem>
        <PanelCategoryListItem>
          <StyleLink
            className={pathname === '/admin/product-management' ? 'active' : ''}
            href="/admin/product-management"
          >
            Галерея
          </StyleLink>
          <StyleBsFillGearFill />
        </PanelCategoryListItem>
      </PanelCategoryList>
    </>
  );
};

export default AdminSidebar;
