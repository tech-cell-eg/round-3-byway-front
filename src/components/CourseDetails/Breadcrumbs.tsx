import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '../ui/breadcrumb';

function Breadcrumbs() {
  return (
    <Breadcrumb>
      <BreadcrumbList>
        {/* loop on list of links, each item takes this bread crumb from line 15 to line 19 */}
        <BreadcrumbItem className="hover:text-accent-secondary">
          <BreadcrumbLink href="/">Home</BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbSeparator className="text-content-dark" />

        <BreadcrumbItem className="hover:text-accent-secondary">
          <BreadcrumbLink href="/components">Courses</BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbSeparator className="text-content-dark" />

        <BreadcrumbItem>
          {/* ...props > courseName(as a prop) */}
          {/* list of links (each link has its own text and href)  */}
          <BreadcrumbPage>Course Name</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  );
}

export default Breadcrumbs;
