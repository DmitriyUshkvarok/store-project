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
            className={pathname === '/don-pedro/orders' ? 'active' : ''}
            href="/don-pedro/orders"
          >
            Замовлення
          </StyleLink>
          <StyleBsFillGearFill />
        </PanelCategoryListItem>
        <PanelCategoryListItem>
          <StyleLink
            className={
              pathname === '/don-pedro/catalog-management' ? 'active' : ''
            }
            href="/don-pedro/catalog-management"
          >
            Керування Каталогом
          </StyleLink>
          <StyleBsFillGearFill />
        </PanelCategoryListItem>
        <PanelCategoryListItem>
          <StyleLink
            className={
              pathname === '/don-pedro/category-management' ? 'active' : ''
            }
            href="/don-pedro/category-management"
          >
            Додати товар
          </StyleLink>
          <StyleBsFillGearFill />
        </PanelCategoryListItem>
        <PanelCategoryListItem>
          <StyleLink
            className={
              pathname === '/don-pedro/product-management' ? 'active' : ''
            }
            href="/don-pedro/product-management"
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
