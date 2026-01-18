import React, { useState } from "react";
import { Button } from "../components/Button";
import { Modal } from "../components/Modal";
import { ConfirmDialog } from "../components/ConfirmDialog";
import { ToastContainer, useToast } from "../components/Toast";
import {
  LayoutDashboard,
  Users,
  Package,
  ShoppingCart,
  Edit2,
  Trash2,
  Plus,
  Eye,
  TrendingUp,
} from "lucide-react";

const Admin: React.FC = () => {
  const [activeTab, setActiveTab] = useState<
    "dashboard" | "users" | "products" | "orders"
  >("dashboard");
  const toast = useToast();

  const navItems = [
    { id: "dashboard", label: "Dashboard", icon: LayoutDashboard },
    { id: "users", label: "Users", icon: Users },
    { id: "products", label: "Products", icon: Package },
    { id: "orders", label: "Orders", icon: ShoppingCart },
  ] as const;

  return (
    <div className="min-h-screen bg-gray-50 flex">
      <ToastContainer toasts={toast.toasts} onClose={toast.removeToast} />

      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-lg">
        <div className="p-8">
          <h1 className="text-2xl font-bold text-primary">EcoStyle</h1>
          <p className="text-sm text-gray-500">Admin Panel</p>
        </div>

        <nav className="space-y-2 px-4 py-6">
          {navItems.map(({ id, label, icon: Icon }) => (
            <button
              key={id}
              onClick={() => setActiveTab(id as any)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 ${
                activeTab === id
                  ? "bg-primary text-white shadow-md"
                  : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              <Icon size={20} />
              <span className="font-medium">{label}</span>
            </button>
          ))}
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="bg-white shadow">
          <div className="px-8 py-6">
            <div className="flex justify-between items-center">
              <h2 className="text-3xl font-bold text-gray-900">
                {navItems.find((item) => item.id === activeTab)?.label}{" "}
                Management
              </h2>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">A</span>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900">
                    Admin User
                  </p>
                  <p className="text-xs text-gray-500">Administrator</p>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Content */}
        <main className="flex-1 p-8">
          <div className="max-w-7xl">
            {activeTab === "dashboard" && <DashboardTab />}
            {activeTab === "users" && <UsersTab toast={toast} />}
            {activeTab === "products" && <ProductsTab toast={toast} />}
            {activeTab === "orders" && <OrdersTab toast={toast} />}
          </div>
        </main>
      </div>
    </div>
  );
};

const DashboardTab: React.FC = () => {
  const stats = [
    {
      title: "Total Users",
      value: "1,234",
      change: "+12%",
      color: "bg-blue-500",
      icon: Users,
    },
    {
      title: "Total Products",
      value: "567",
      change: "+8%",
      color: "bg-green-500",
      icon: Package,
    },
    {
      title: "Total Orders",
      value: "89",
      change: "+23%",
      color: "bg-purple-500",
      icon: ShoppingCart,
    },
    {
      title: "Revenue",
      value: "$12.5K",
      change: "+15%",
      color: "bg-orange-500",
      icon: TrendingUp,
    },
  ];

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {stats.map((stat, i) => {
          const Icon = stat.icon;
          return (
            <div
              key={i}
              className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-500 text-sm">{stat.title}</p>
                  <p className="text-2xl font-bold text-gray-900 mt-2">
                    {stat.value}
                  </p>
                  <p className="text-sm text-green-600 mt-1">
                    {stat.change} from last month
                  </p>
                </div>
                <div
                  className={`${stat.color} w-12 h-12 rounded-lg flex items-center justify-center text-white opacity-80`}
                >
                  <Icon size={24} />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Recent Orders
          </h3>
          <div className="space-y-3">
            {[1, 2, 3, 4, 5].map((i) => (
              <div
                key={i}
                className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
              >
                <div>
                  <p className="text-sm font-medium text-gray-900">
                    Order #ORD{1000 + i}
                  </p>
                  <p className="text-xs text-gray-500">Customer {i}</p>
                </div>
                <span className="text-sm font-semibold text-gray-900">
                  ${99.99 * i}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Top Products
          </h3>
          <div className="space-y-3">
            {[1, 2, 3, 4, 5].map((i) => (
              <div
                key={i}
                className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
              >
                <div>
                  <p className="text-sm font-medium text-gray-900">
                    Product {i}
                  </p>
                  <p className="text-xs text-gray-500">Sold: {10 * i} units</p>
                </div>
                <span className="text-sm font-semibold text-primary">
                  ${99.99 * i}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

interface TabProps {
  toast: ReturnType<typeof useToast>;
}

const UsersTab: React.FC<TabProps> = ({ toast }) => {
  const [sortBy, setSortBy] = useState("name");
  const [filterRole, setFilterRole] = useState("all");
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [deleteConfirmOpen, setDeleteConfirmOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState<any>(null);
  const [userToDelete, setUserToDelete] = useState<any>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    role: "customer",
  });

  const [users, setUsers] = useState([
    {
      id: 1,
      name: "John Doe",
      email: "john@example.com",
      role: "customer",
      status: "active",
      joinDate: "2024-01-15",
    },
    {
      id: 2,
      name: "Jane Smith",
      email: "jane@example.com",
      role: "customer",
      status: "active",
      joinDate: "2024-02-20",
    },
    {
      id: 3,
      name: "Bob Johnson",
      email: "bob@example.com",
      role: "moderator",
      status: "active",
      joinDate: "2024-01-10",
    },
  ]);

  const handleAddUser = () => {
    if (formData.name && formData.email) {
      setUsers([
        ...users,
        {
          id: users.length + 1,
          ...formData,
          status: "active",
          joinDate: new Date().toISOString().split("T")[0],
        },
      ]);
      toast.success(
        "User added successfully",
        `${formData.name} has been added`,
      );
      setFormData({ name: "", email: "", role: "customer" });
      setIsAddModalOpen(false);
    }
  };

  const handleEditUser = () => {
    setUsers(
      users.map((u) =>
        u.id === selectedUser.id
          ? {
              ...u,
              name: formData.name,
              email: formData.email,
              role: formData.role,
            }
          : u,
      ),
    );
    toast.success(
      "User updated successfully",
      `${formData.name} has been updated`,
    );
    setIsEditModalOpen(false);
    setFormData({ name: "", email: "", role: "customer" });
  };

  const handleOpenEditModal = (user: any) => {
    setSelectedUser(user);
    setFormData({ name: user.name, email: user.email, role: user.role });
    setIsEditModalOpen(true);
  };

  const handleDeleteUser = () => {
    setUsers(users.filter((u) => u.id !== userToDelete.id));
    toast.success(
      "User deleted successfully",
      `${userToDelete.name} has been deleted`,
    );
    setDeleteConfirmOpen(false);
    setUserToDelete(null);
  };

  const openDeleteConfirm = (user: any) => {
    setUserToDelete(user);
    setDeleteConfirmOpen(true);
  };

  const filteredUsers =
    filterRole === "all" ? users : users.filter((u) => u.role === filterRole);

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center gap-4">
        <div className="flex gap-3">
          <div className="relative">
            <label className="text-sm font-medium text-gray-700 block mb-2">
              Filter by Role
            </label>
            <select
              value={filterRole}
              onChange={(e) => setFilterRole(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary"
            >
              <option value="all">All Roles</option>
              <option value="customer">Customer</option>
              <option value="moderator">Moderator</option>
              <option value="admin">Admin</option>
            </select>
          </div>

          <div className="relative">
            <label className="text-sm font-medium text-gray-700 block mb-2">
              Sort by
            </label>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary"
            >
              <option value="name">Name</option>
              <option value="date">Join Date</option>
              <option value="status">Status</option>
            </select>
          </div>
        </div>

        <Button variant="primary" onClick={() => setIsAddModalOpen(true)}>
          <Plus size={18} />
          Add User
        </Button>
      </div>

      <div className="bg-white rounded-lg shadow overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-50 border-b border-gray-200">
            <tr>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">
                Name
              </th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">
                Email
              </th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">
                Role
              </th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">
                Status
              </th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">
                Join Date
              </th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {filteredUsers.map((user) => (
              <tr key={user.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 text-sm font-medium text-gray-900">
                  {user.name}
                </td>
                <td className="px-6 py-4 text-sm text-gray-600">
                  {user.email}
                </td>
                <td className="px-6 py-4 text-sm">
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-medium capitalize">
                    {user.role}
                  </span>
                </td>
                <td className="px-6 py-4 text-sm">
                  <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-xs font-medium capitalize">
                    {user.status}
                  </span>
                </td>
                <td className="px-6 py-4 text-sm text-gray-600">
                  {user.joinDate}
                </td>
                <td className="px-6 py-4 text-sm">
                  <div className="flex gap-2">
                    <Button
                      variant="ghost"
                      className="px-3 py-1 text-xs"
                      onClick={() => handleOpenEditModal(user)}
                    >
                      <Edit2 size={16} />
                    </Button>
                    <Button
                      variant="ghost"
                      className="px-3 py-1 text-xs text-red-600 hover:bg-red-50"
                      onClick={() => openDeleteConfirm(user)}
                    >
                      <Trash2 size={16} />
                    </Button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Add User Modal */}
      <Modal
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        title="Add New User"
      >
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Name
            </label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="Enter user name"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="Enter email"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Role
            </label>
            <select
              value={formData.role}
              onChange={(e) =>
                setFormData({ ...formData, role: e.target.value })
              }
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            >
              <option value="customer">Customer</option>
              <option value="moderator">Moderator</option>
              <option value="admin">Admin</option>
            </select>
          </div>
          <div className="flex gap-2 pt-4">
            <Button
              variant="primary"
              className="flex-1"
              onClick={handleAddUser}
            >
              Add User
            </Button>
            <Button
              variant="outline"
              className="flex-1"
              onClick={() => setIsAddModalOpen(false)}
            >
              Cancel
            </Button>
          </div>
        </div>
      </Modal>

      {/* Edit User Modal */}
      <Modal
        isOpen={isEditModalOpen}
        onClose={() => setIsEditModalOpen(false)}
        title="Edit User"
      >
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Name
            </label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="Enter user name"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="Enter email"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Role
            </label>
            <select
              value={formData.role}
              onChange={(e) =>
                setFormData({ ...formData, role: e.target.value })
              }
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            >
              <option value="customer">Customer</option>
              <option value="moderator">Moderator</option>
              <option value="admin">Admin</option>
            </select>
          </div>
          <div className="flex gap-2 pt-4">
            <Button
              variant="primary"
              className="flex-1"
              onClick={handleEditUser}
            >
              Save Changes
            </Button>
            <Button
              variant="outline"
              className="flex-1"
              onClick={() => setIsEditModalOpen(false)}
            >
              Cancel
            </Button>
          </div>
        </div>
      </Modal>

      {/* Delete Confirmation Dialog */}
      <ConfirmDialog
        isOpen={deleteConfirmOpen}
        onClose={() => setDeleteConfirmOpen(false)}
        title="Delete User"
        message={`Are you sure you want to delete ${userToDelete?.name}? This action cannot be undone.`}
        confirmText="Delete"
        cancelText="Cancel"
        onConfirm={handleDeleteUser}
        isDangerous={true}
      />
    </div>
  );
};

const ProductsTab: React.FC<TabProps> = ({ toast }) => {
  const [filterCategory, setFilterCategory] = useState("all");
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [deleteConfirmOpen, setDeleteConfirmOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<any>(null);
  const [productToDelete, setProductToDelete] = useState<any>(null);
  const [formData, setFormData] = useState({
    name: "",
    category: "clothing",
    price: "",
    stock: "",
  });

  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Eco T-Shirt",
      category: "clothing",
      price: 29.99,
      stock: 45,
      status: "active",
    },
    {
      id: 2,
      name: "Bamboo Water Bottle",
      category: "accessories",
      price: 24.99,
      stock: 120,
      status: "active",
    },
    {
      id: 3,
      name: "Organic Cotton Jeans",
      category: "clothing",
      price: 79.99,
      stock: 30,
      status: "active",
    },
  ]);

  const handleAddProduct = () => {
    if (formData.name && formData.price && formData.stock) {
      setProducts([
        ...products,
        {
          id: products.length + 1,
          name: formData.name,
          category: formData.category,
          price: parseFloat(formData.price),
          stock: parseInt(formData.stock),
          status: "active",
        },
      ]);
      toast.success(
        "Product added successfully",
        `${formData.name} has been added`,
      );
      setFormData({ name: "", category: "clothing", price: "", stock: "" });
      setIsAddModalOpen(false);
    }
  };

  const handleEditProduct = () => {
    setProducts(
      products.map((p) =>
        p.id === selectedProduct.id
          ? {
              ...p,
              name: formData.name,
              category: formData.category,
              price: parseFloat(formData.price),
              stock: parseInt(formData.stock),
            }
          : p,
      ),
    );
    toast.success(
      "Product updated successfully",
      `${formData.name} has been updated`,
    );
    setIsEditModalOpen(false);
    setFormData({ name: "", category: "clothing", price: "", stock: "" });
  };

  const handleOpenEditModal = (product: any) => {
    setSelectedProduct(product);
    setFormData({
      name: product.name,
      category: product.category,
      price: product.price.toString(),
      stock: product.stock.toString(),
    });
    setIsEditModalOpen(true);
  };

  const handleDeleteProduct = () => {
    setProducts(products.filter((p) => p.id !== productToDelete.id));
    toast.success(
      "Product deleted successfully",
      `${productToDelete.name} has been deleted`,
    );
    setDeleteConfirmOpen(false);
    setProductToDelete(null);
  };

  const openDeleteConfirm = (product: any) => {
    setProductToDelete(product);
    setDeleteConfirmOpen(true);
  };

  const filteredProducts =
    filterCategory === "all"
      ? products
      : products.filter((p) => p.category === filterCategory);

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center gap-4">
        <div className="relative">
          <label className="text-sm font-medium text-gray-700 block mb-2">
            Filter by Category
          </label>
          <select
            value={filterCategory}
            onChange={(e) => setFilterCategory(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary"
          >
            <option value="all">All Categories</option>
            <option value="clothing">Clothing</option>
            <option value="accessories">Accessories</option>
            <option value="footwear">Footwear</option>
          </select>
        </div>

        <Button variant="primary" onClick={() => setIsAddModalOpen(true)}>
          <Plus size={18} />
          Add Product
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-lg shadow overflow-hidden hover:shadow-lg transition-shadow"
          >
            <div className="w-full h-40 bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center">
              <Package size={48} className="text-primary opacity-40" />
            </div>
            <div className="p-5">
              <div className="flex items-start justify-between mb-2">
                <div>
                  <h4 className="font-semibold text-gray-900">
                    {product.name}
                  </h4>
                  <p className="text-xs text-gray-500 capitalize">
                    {product.category}
                  </p>
                </div>
                <span className="px-2 py-1 bg-green-100 text-green-800 rounded text-xs font-medium">
                  {product.status}
                </span>
              </div>
              <div className="flex justify-between items-center mb-4">
                <p className="text-lg font-bold text-primary">
                  ${product.price}
                </p>
                <p className="text-xs text-gray-600">Stock: {product.stock}</p>
              </div>
              <div className="flex gap-2">
                <Button
                  variant="outline"
                  className="flex-1 text-xs"
                  onClick={() => handleOpenEditModal(product)}
                >
                  <Edit2 size={14} />
                  Edit
                </Button>
                <Button
                  variant="ghost"
                  className="px-3 py-2 text-xs text-red-600 hover:bg-red-50"
                  onClick={() => openDeleteConfirm(product)}
                >
                  <Trash2 size={14} />
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Add Product Modal */}
      <Modal
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        title="Add New Product"
      >
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Product Name
            </label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="Enter product name"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Category
            </label>
            <select
              value={formData.category}
              onChange={(e) =>
                setFormData({ ...formData, category: e.target.value })
              }
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            >
              <option value="clothing">Clothing</option>
              <option value="accessories">Accessories</option>
              <option value="footwear">Footwear</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Price
            </label>
            <input
              type="number"
              step="0.01"
              value={formData.price}
              onChange={(e) =>
                setFormData({ ...formData, price: e.target.value })
              }
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="Enter price"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Stock
            </label>
            <input
              type="number"
              value={formData.stock}
              onChange={(e) =>
                setFormData({ ...formData, stock: e.target.value })
              }
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="Enter stock quantity"
            />
          </div>
          <div className="flex gap-2 pt-4">
            <Button
              variant="primary"
              className="flex-1"
              onClick={handleAddProduct}
            >
              Add Product
            </Button>
            <Button
              variant="outline"
              className="flex-1"
              onClick={() => setIsAddModalOpen(false)}
            >
              Cancel
            </Button>
          </div>
        </div>
      </Modal>

      {/* Edit Product Modal */}
      <Modal
        isOpen={isEditModalOpen}
        onClose={() => setIsEditModalOpen(false)}
        title="Edit Product"
      >
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Product Name
            </label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="Enter product name"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Category
            </label>
            <select
              value={formData.category}
              onChange={(e) =>
                setFormData({ ...formData, category: e.target.value })
              }
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            >
              <option value="clothing">Clothing</option>
              <option value="accessories">Accessories</option>
              <option value="footwear">Footwear</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Price
            </label>
            <input
              type="number"
              step="0.01"
              value={formData.price}
              onChange={(e) =>
                setFormData({ ...formData, price: e.target.value })
              }
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="Enter price"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Stock
            </label>
            <input
              type="number"
              value={formData.stock}
              onChange={(e) =>
                setFormData({ ...formData, stock: e.target.value })
              }
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="Enter stock quantity"
            />
          </div>
          <div className="flex gap-2 pt-4">
            <Button
              variant="primary"
              className="flex-1"
              onClick={handleEditProduct}
            >
              Save Changes
            </Button>
            <Button
              variant="outline"
              className="flex-1"
              onClick={() => setIsEditModalOpen(false)}
            >
              Cancel
            </Button>
          </div>
        </div>
      </Modal>

      {/* Delete Confirmation Dialog */}
      <ConfirmDialog
        isOpen={deleteConfirmOpen}
        onClose={() => setDeleteConfirmOpen(false)}
        title="Delete Product"
        message={`Are you sure you want to delete ${productToDelete?.name}? This action cannot be undone.`}
        confirmText="Delete"
        cancelText="Cancel"
        onConfirm={handleDeleteProduct}
        isDangerous={true}
      />
    </div>
  );
};

const OrdersTab: React.FC<TabProps> = ({ toast }) => {
  const [filterStatus, setFilterStatus] = useState("all");
  const [isViewModalOpen, setIsViewModalOpen] = useState(false);
  const [cancelConfirmOpen, setCancelConfirmOpen] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState<any>(null);
  const [orderToCancel, setOrderToCancel] = useState<any>(null);

  const [orders, setOrders] = useState([
    {
      id: 1001,
      customer: "John Doe",
      email: "john@example.com",
      total: 99.99,
      status: "completed",
      date: "2024-01-15",
      items: 2,
      details: "Eco T-Shirt, Bamboo Water Bottle",
    },
    {
      id: 1002,
      customer: "Jane Smith",
      email: "jane@example.com",
      total: 199.99,
      status: "pending",
      date: "2024-01-18",
      items: 3,
      details: "Organic Cotton Jeans, Eco T-Shirt, Accessories",
    },
    {
      id: 1003,
      customer: "Bob Johnson",
      email: "bob@example.com",
      total: 149.99,
      status: "completed",
      date: "2024-01-17",
      items: 1,
      details: "Organic Cotton Jeans",
    },
    {
      id: 1004,
      customer: "Alice Williams",
      email: "alice@example.com",
      total: 249.99,
      status: "shipped",
      date: "2024-01-16",
      items: 5,
      details: "Multiple items",
    },
  ]);

  const handleCancelOrder = () => {
    setOrders(
      orders.map((o) =>
        o.id === orderToCancel.id ? { ...o, status: "cancelled" } : o,
      ),
    );
    toast.success(
      "Order cancelled",
      `Order #ORD${orderToCancel.id} has been cancelled`,
    );
    setCancelConfirmOpen(false);
    setIsViewModalOpen(false);
    setOrderToCancel(null);
  };

  const handleOpenViewModal = (order: any) => {
    setSelectedOrder(order);
    setIsViewModalOpen(true);
  };

  const openCancelConfirm = (order: any) => {
    setOrderToCancel(order);
    setCancelConfirmOpen(true);
  };

  const filteredOrders =
    filterStatus === "all"
      ? orders
      : orders.filter((o) => o.status === filterStatus);

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "bg-green-100 text-green-800";
      case "pending":
        return "bg-yellow-100 text-yellow-800";
      case "shipped":
        return "bg-blue-100 text-blue-800";
      case "cancelled":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center gap-4">
        <div className="relative">
          <label className="text-sm font-medium text-gray-700 block mb-2">
            Filter by Status
          </label>
          <select
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary"
          >
            <option value="all">All Orders</option>
            <option value="pending">Pending</option>
            <option value="shipped">Shipped</option>
            <option value="completed">Completed</option>
            <option value="cancelled">Cancelled</option>
          </select>
        </div>

        <Button variant="primary">
          <Plus size={18} />
          New Order
        </Button>
      </div>

      <div className="bg-white rounded-lg shadow overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-50 border-b border-gray-200">
            <tr>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">
                Order ID
              </th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">
                Customer
              </th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">
                Items
              </th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">
                Total
              </th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">
                Date
              </th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">
                Status
              </th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {filteredOrders.map((order) => (
              <tr key={order.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 text-sm font-medium text-gray-900">
                  #ORD{order.id}
                </td>
                <td className="px-6 py-4 text-sm">
                  <div>
                    <p className="font-medium text-gray-900">
                      {order.customer}
                    </p>
                    <p className="text-xs text-gray-500">{order.email}</p>
                  </div>
                </td>
                <td className="px-6 py-4 text-sm text-gray-600">
                  {order.items} item(s)
                </td>
                <td className="px-6 py-4 text-sm font-semibold text-gray-900">
                  ${order.total.toFixed(2)}
                </td>
                <td className="px-6 py-4 text-sm text-gray-600">
                  {order.date}
                </td>
                <td className="px-6 py-4 text-sm">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium capitalize ${getStatusColor(
                      order.status,
                    )}`}
                  >
                    {order.status}
                  </span>
                </td>
                <td className="px-6 py-4 text-sm">
                  <div className="flex gap-2">
                    <Button
                      variant="ghost"
                      className="px-3 py-1 text-xs"
                      onClick={() => handleOpenViewModal(order)}
                    >
                      <Eye size={16} />
                    </Button>
                    {order.status !== "completed" &&
                      order.status !== "cancelled" && (
                        <Button
                          variant="ghost"
                          className="px-3 py-1 text-xs text-red-600 hover:bg-red-50"
                          onClick={() => openCancelConfirm(order)}
                        >
                          <Trash2 size={16} />
                        </Button>
                      )}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* View Order Modal */}
      <Modal
        isOpen={isViewModalOpen}
        onClose={() => setIsViewModalOpen(false)}
        title="Order Details"
      >
        {selectedOrder && (
          <div className="space-y-4">
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-sm text-gray-600">Order ID</p>
              <p className="text-lg font-bold text-gray-900">
                #ORD{selectedOrder.id}
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-gray-600">Customer</p>
                <p className="font-medium text-gray-900">
                  {selectedOrder.customer}
                </p>
                <p className="text-xs text-gray-500">{selectedOrder.email}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Date</p>
                <p className="font-medium text-gray-900">
                  {selectedOrder.date}
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-gray-600">Items</p>
                <p className="font-medium text-gray-900">
                  {selectedOrder.items} item(s)
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Total</p>
                <p className="font-bold text-primary text-lg">
                  ${selectedOrder.total.toFixed(2)}
                </p>
              </div>
            </div>
            <div>
              <p className="text-sm text-gray-600">Items Details</p>
              <p className="font-medium text-gray-900">
                {selectedOrder.details}
              </p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Status</p>
              <span
                className={`inline-block mt-1 px-3 py-1 rounded-full text-xs font-medium capitalize ${getStatusColor(
                  selectedOrder.status,
                )}`}
              >
                {selectedOrder.status}
              </span>
            </div>
            <div className="flex gap-2 pt-4">
              {selectedOrder.status !== "completed" &&
                selectedOrder.status !== "cancelled" && (
                  <Button
                    variant="primary"
                    className="flex-1"
                    onClick={() => openCancelConfirm(selectedOrder)}
                  >
                    Cancel Order
                  </Button>
                )}
              <Button
                variant="outline"
                className="flex-1"
                onClick={() => setIsViewModalOpen(false)}
              >
                Close
              </Button>
            </div>
          </div>
        )}
      </Modal>

      {/* Cancel Order Confirmation */}
      <ConfirmDialog
        isOpen={cancelConfirmOpen}
        onClose={() => setCancelConfirmOpen(false)}
        title="Cancel Order"
        message={`Are you sure you want to cancel order #ORD${orderToCancel?.id}? This action cannot be undone.`}
        confirmText="Cancel Order"
        cancelText="Keep Order"
        onConfirm={handleCancelOrder}
        isDangerous={true}
      />
    </div>
  );
};

function getStatusColor(status: string) {
  switch (status) {
    case "completed":
      return "bg-green-100 text-green-800";
    case "pending":
      return "bg-yellow-100 text-yellow-800";
    case "shipped":
      return "bg-blue-100 text-blue-800";
    case "cancelled":
      return "bg-red-100 text-red-800";
    default:
      return "bg-gray-100 text-gray-800";
  }
}

export default Admin;
