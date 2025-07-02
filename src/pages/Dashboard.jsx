import React, { useState, useEffect } from "react";
import { MdMenu, MdClose } from "react-icons/md";
import { FaArrowDown, FaArrowUp, FaWallet } from "react-icons/fa";
import { PieChart, Pie, Cell, Tooltip } from "recharts";
import { FaGamepad, FaUserShield, FaLock, FaMoneyBill, FaImage, FaInfoCircle, FaShieldAlt, FaCheck } from "react-icons/fa";
import { Link } from 'react-router-dom';

const spendingData = [
  { name: "Account", value: 35, color: "#3b82f6" },
  { name: "Game Card", value: 25, color: "#22c55e" },
  { name: "Account Selling", value: 20, color: "#f97316" },
  { name: "Internet Recharges", value: 15, color: "#ef4444" },
  { name: "Other", value: 5, color: "#8b5cf6" }
];

const menuItems = ["My Profile", "My Orders", "Notifications", "Messages", "My Wallet" , "My Account"];


const Wallet = () => {
  const [barHeights, setBarHeights] = useState([0, 0, 0, 0]);

  useEffect(() => {
    setTimeout(() => {
      setBarHeights([100, 230, 200, 100]);
    }, 200);
  }, []);



  return ( 
    <div className="p-6 space-y-8">
      <div className="flex items-center justify-between bg-white p-6 rounded shadow">
        <div>
          <h2 className="text-3xl font-bold text-blue-600">$12,000</h2>
        </div>
        <div className="flex gap-4">
  <Link
  to="/topp" // مسار الصفحة داخل التطبيق
  className="bg-blue-600 text-white px-4 py-2 rounded flex items-center gap-2 hover:bg-blue-700"
>
  <FaArrowDown /> Top Up
</Link>
          <button className="border border-blue-600 text-blue-600 px-4 py-2 rounded flex items-center gap-2 hover:bg-blue-100">
            <FaArrowUp /> Withdraw
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded shadow">
          <h3 className="text-xl font-bold mb-4">📅 Weekly Spend</h3>
   <div className="flex items-end justify-between gap-4 h-64">
  {barHeights.map((height, index) => (
    <div
      key={index}
      className="bg-blue-500 w-10 rounded-t transition-all duration-1000 ease-out"
      style={{ height: `${height}px` }}
    ></div>
  ))}
</div>

        </div>

        <div className="bg-white p-6 rounded shadow flex flex-col md:flex-row gap-6">
          <div>
            <h3 className="text-xl font-bold mb-4">📌 Spending by Category</h3>
            <PieChart width={200} height={200}>
              <Pie
                data={spendingData}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={80}
                fill="#8884d8"
                label
              >
                {spendingData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </div>
          <div className="space-y-2">
            {spendingData.map((item) => (
              <div key={item.name} className="flex items-center gap-2">
                <span
                  className="w-3 h-3 rounded-full inline-block"
                  style={{ backgroundColor: item.color }}
                ></span>
                <span>
                  {item.name} ({item.value}%)
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const Dashboard = () => {
  const [activeItem, setActiveItem] = useState("My Profile");
  const [showSidebar, setShowSidebar] = useState(true);
  const [notificationTab, setNotificationTab] = useState("All");
  const [selectedUser, setSelectedUser] = useState("Mohamed");
  const [messages, setMessages] = useState({
    Mohamed: ["Hey Mohamed!", "How are you?"],
    Hassan: ["Hi Hassan!", "Everything good?"],
    Ibrahim: ["Hello Ibrahim!", "Hope you're well."]
  });
  const [newMessage, setNewMessage] = useState("");

  const handleSend = () => {
    if (newMessage.trim()) {
      setMessages((prev) => ({
        ...prev,
        [selectedUser]: [...prev[selectedUser], `Me: ${newMessage}`]
      }));
      setNewMessage("");
    }
  };

  const renderNotifications = () => {
    switch (notificationTab) {
      case "All":
        return <div>🔔 Showing all notifications...</div>;
      case "Orders":
        return <div>📦 Your order updates will show here.</div>;
      case "Promotion":
        return <div>🏷️ Promotions, discounts & offers.</div>;
      case "System":
        return <div>⚙️ System updates and alerts.</div>;
      default:
        return null;
    }
  };

  const renderContent = () => {
    switch (activeItem) {
      case "My Profile":
        return (
          <div className="space-y-6">
            {/* Profile Info */}
            <div className="border rounded-lg p-6 shadow-sm bg-white">
              <h3 className="text-center text-xl font-bold mb-6">👤 Profile Info</h3>
              <div className="flex items-center gap-6 mb-6">
                <img src="https://via.placeholder.com/80" alt="Profile" className="w-20 h-20 rounded-full border" />
                <div><p className="font-semibold">Profile Photo</p></div>
              </div>
              <div className="space-y-4">
                <div><label className="block text-sm font-medium mb-1">Full Name</label><input type="text" className="w-full border rounded px-3 py-2" /></div>
                <div><label className="block text-sm font-medium mb-1">Email Address</label><input type="email" className="w-full border rounded px-3 py-2" /></div>
                <div><label className="block text-sm font-medium mb-1">Bio</label><textarea rows="3" className="w-full border rounded px-3 py-2"></textarea></div>
              </div>
            </div>

            {/* Security */}
            <div className="border rounded-lg p-6 shadow-sm bg-white">
              <h3 className="text-center text-xl font-bold mb-6">🔐 Security</h3>
              <div className="space-y-4">
                <div><label className="block text-sm font-medium mb-1">Current Password</label><input type="password" className="w-full border rounded px-3 py-2" /></div>
                <div><label className="block text-sm font-medium mb-1">New Password</label><input type="password" className="w-full border rounded px-3 py-2" /></div>
                <div><label className="block text-sm font-medium mb-1">Confirm Password</label><input type="password" className="w-full border rounded px-3 py-2" /></div>
              </div>
            </div>

            {/* Connected Accounts */}
            <div className="border rounded-lg p-6 shadow-sm bg-white">
              <h3 className="text-center text-xl font-bold mb-6">🔗 Connected Accounts</h3>
              <div className="space-y-4">
                {["Google", "Facebook", "X (Twitter)"].map((platform) => (
                  <div key={platform} className="flex justify-between items-center border p-3 rounded">
                    <span>{platform}</span>
                    <button className="px-4 py-1 bg-blue-600 text-white rounded hover:bg-blue-700">Connect</button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case "My Orders":
        return (
          <div className="border rounded-lg p-6 bg-white">
            <h3 className="text-xl font-bold mb-1">📟 My Orders</h3>
            <p className="text-gray-600 mb-6">Track and manage your purchases</p>
            <div className="overflow-x-auto">
              <table className="w-full table-auto text-sm">
                <thead>
                  <tr className="bg-gray-100 text-left">
                    <th className="px-4 py-2">Product</th>
                    <th className="px-4 py-2">Price</th>
                    <th className="px-4 py-2">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {[{ name: "Free Fire", price: "$999" }, { name: "PUBG", price: "$899" }, { name: "Fortnite", price: "$349" }].map((order) => (
                    <tr key={order.name} className="border-t">
                      <td className="px-4 py-2">{order.name}</td>
                      <td className="px-4 py-2">{order.price}</td>
                      <td className="px-4 py-2">
                        <button className="text-red-600 hover:underline">Cancel</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        );

      case "Notifications":
        return (
          <div className="border rounded-lg p-6 bg-white">
            <h3 className="text-xl font-bold mb-6">🔔 Notifications</h3>
            <div className="flex gap-4 mb-4">
              {["All", "Orders", "Promotion", "System"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setNotificationTab(tab)}
                  className={`px-4 py-2 rounded-md ${notificationTab === tab ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-700"}`}
                >
                  {tab}
                </button>
              ))}
            </div>
            <div>{renderNotifications()}</div>
          </div>
        );

      case "Messages":
        return (
          <div className="flex gap-4">
            <div className="w-1/3 border rounded-lg p-4 bg-white">
              <input type="text" placeholder="Search..." className="w-full mb-4 px-3 py-2 border rounded" />
              {["Mohamed", "Hassan", "Ibrahim"].map((user) => (
                <div
                  key={user}
                  onClick={() => setSelectedUser(user)}
                  className={`p-2 rounded cursor-pointer mb-2 ${selectedUser === user ? "bg-blue-200 font-semibold" : "hover:bg-gray-100"}`}
                >
                  {user}
                </div>
              ))}
            </div>
            <div className="flex-1 border rounded-lg p-4 bg-white flex flex-col justify-between">
              <div className="mb-4 text-lg font-bold text-blue-900">Chat with {selectedUser}</div>
              <div className="flex-1 overflow-y-auto space-y-2 mb-4 max-h-[400px]">
                {messages[selectedUser].map((msg, idx) => (
                  <div key={idx} className={`p-2 rounded max-w-[70%] ${msg.startsWith("Me:") ? "bg-blue-100 self-end ml-auto" : "bg-gray-100"}`}>
                    {msg}
                  </div>
                ))}
              </div>
              <div className="flex gap-2">
                <input type="text" value={newMessage} onChange={(e) => setNewMessage(e.target.value)} className="flex-1 border rounded px-3 py-2" placeholder="Type a message..." />
                <button onClick={handleSend} className="px-4 py-2 bg-blue-600 text-white rounded">Send</button>
              </div>
            </div>
          </div>
        );

      case "My Wallet":
        return <Wallet />;
case "My Account":
  return <MyAccount />;


      default:
        return <div className="text-gray-600">No content available.</div>;
    }
  };

  return (
    <div className="flex min-h-screen mt-24">
      {!showSidebar && (
        <button className="fixed left-4 text-2xl bg-blue-600 text-white p-2 rounded-md shadow" style={{ top: "150px" }} onClick={() => setShowSidebar(true)}>
          <MdMenu />
        </button>
      )}

      {showSidebar && (
        <div className="w-64 bg-blue-100 p-4 fixed md:static z-40 h-full mt-16">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-bold text-blue-900">Dashboard</h2>
            <MdClose className="text-2xl cursor-pointer text-red-500" onClick={() => setShowSidebar(false)} />
          </div>
          <ul>
            {menuItems.map((item) => (
              <li
                key={item}
                onClick={() => setActiveItem(item)}
                className={`cursor-pointer py-2 px-3 rounded-md mb-2 hover:bg-blue-200 ${activeItem === item ? "bg-blue-300 text-blue-900 font-semibold" : ""}`}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      )}

      <div className={`flex-1 p-6 bg-gray-50 transition-all duration-300 ${showSidebar ? "ml-64 mt-16" : "ml-0 mt-16"}`}>
        <h1 className="text-2xl font-bold mb-4">{activeItem}</h1>
        <div>{renderContent()}</div>
      </div>
    </div>
  );






};



const MyAccount = () => {
  const [formData, setFormData] = useState({
    game: "",
    username: "",
    platform: "",
    rank: "",
    wins: "",
    rareSkin: false,
    accountAge: "",
    skinItems: "",
    emailLinked: "",
    accessEmail: "",
    accessPassword: "",
    price: "",
    allowNegotiation: false,
    currency: "",
    description: "",
    legalConfirm: false,
    termsAgree: false
  });

 return (
    <div className="space-y-6 p-6 bg-gray-50">
      {/* Upload Game Account */}
      <div className="bg-white p-6 rounded shadow">
        <h2 className="text-xl font-bold flex items-center gap-2"><FaGamepad /> Upload Game Account</h2>
        <p className="text-gray-600 mt-2">Fill in all the required details. Your listing is important for account security.</p>

        <div className="grid md:grid-cols-2 gap-6 mt-4">
          <div>
            <h3 className="font-semibold mb-2">Game Information</h3>
            <label className="block mb-1">Game Title</label>
            <select className="w-full border rounded px-3 py-2" onChange={(e) => setFormData({ ...formData, game: e.target.value })}>
              <option value="">Select Game</option>
              <option value="PUBG">PUBG</option>
              <option value="Fortnite">Fortnite</option>
              <option value="Free Fire">Free Fire</option>
            </select>

            <label className="block mt-4 mb-1">Account Username / ID</label>
            <input type="text" className="w-full border rounded px-3 py-2" onChange={(e) => setFormData({ ...formData, username: e.target.value })} />

            <label className="block mt-4 mb-1">Platform</label>
            <div className="flex gap-4">
              {['PC', 'PS5', 'Android', 'iPhone', 'Xbox'].map((plat) => (
                <button
                  key={plat}
                  onClick={() => setFormData({ ...formData, platform: plat })}
                  className={`px-3 py-2 rounded border ${formData.platform === plat ? 'bg-blue-500 text-white' : ''}`}
                >
                  {plat}
                </button>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-2 flex items-center gap-2"><FaUserShield /> Account Features</h3>
            <label className="block mb-1">Rank / Level</label>
            <input type="text" className="w-full border rounded px-3 py-2" onChange={(e) => setFormData({ ...formData, rank: e.target.value })} />

            <label className="block mt-4 mb-1">Number of Wins</label>
            <input type="text" className="w-full border rounded px-3 py-2" onChange={(e) => setFormData({ ...formData, wins: e.target.value })} />

            <label className="block mt-4 mb-1">Rare Skin Available</label>
            <input type="checkbox" className="mr-2" onChange={(e) => setFormData({ ...formData, rareSkin: e.target.checked })} />

            <label className="block mt-4 mb-1">Account Age</label>
            <input type="text" className="w-full border rounded px-3 py-2" onChange={(e) => setFormData({ ...formData, accountAge: e.target.value })} />

            <label className="block mt-4 mb-1">Skin Items</label>
            <input type="text" className="w-full border rounded px-3 py-2" onChange={(e) => setFormData({ ...formData, skinItems: e.target.value })} />

            <label className="block mt-4 mb-1">Original Email Linked</label>
            <input type="text" className="w-full border rounded px-3 py-2" onChange={(e) => setFormData({ ...formData, emailLinked: e.target.value })} />
          </div>
        </div>
      </div>

      {/* Access Info */}
      <div className="bg-white p-6 rounded shadow">
        <h2 className="text-xl font-bold flex items-center gap-2"><FaLock /> Access Information</h2>
        <label className="block mt-4 mb-1">Email</label>
        <input type="email" className="w-full border rounded px-3 py-2" onChange={(e) => setFormData({ ...formData, accessEmail: e.target.value })} />
        <label className="block mt-4 mb-1">Password</label>
        <input type="password" className="w-full border rounded px-3 py-2" onChange={(e) => setFormData({ ...formData, accessPassword: e.target.value })} />
        <p className="text-sm text-gray-500 mt-2 flex items-center gap-1"><FaInfoCircle /> Credentials will be shared only after approval.</p>
      </div>

      {/* Pricing */}
      <div className="bg-white p-6 rounded shadow">
        <h2 className="text-xl font-bold flex items-center gap-2"><FaMoneyBill /> Pricing</h2>
        <label className="block mt-4 mb-1">Price</label>
        <input type="text" className="w-full border rounded px-3 py-2" onChange={(e) => setFormData({ ...formData, price: e.target.value })} />

        <div className="flex items-center gap-2 mt-4">
          <input type="checkbox" onChange={(e) => setFormData({ ...formData, allowNegotiation: e.target.checked })} />
          <label>Allow Price Negotiation</label>
        </div>

        <label className="block mt-4 mb-1">Currency</label>
        <select className="w-full border rounded px-3 py-2" onChange={(e) => setFormData({ ...formData, currency: e.target.value })}>
          <option value="">Select Currency</option>
          <option value="USD">USD</option>
          <option value="EG">EG</option>
          <option value="MOR">MOR</option>
          <option value="TU">TU</option>
        </select>
      </div>

      {/* Upload Screenshot */}
      <div className="bg-white p-6 rounded shadow">
        <h2 className="text-xl font-bold flex items-center gap-2"><FaImage /> Upload Screenshot</h2>
        <div className="mt-4 p-6 bg-blue-50 border-2 border-dashed border-blue-300 rounded text-center">
          <p>Drag and drop your screenshots</p>
          <p className="my-2 text-gray-500">or</p>
          <button className="bg-blue-600 text-white px-4 py-2 rounded">Browse Files</button>
        </div>
      </div>

      {/* Description */}
      <div className="bg-white p-6 rounded shadow">
        <h2 className="text-xl font-bold flex items-center gap-2"><FaInfoCircle /> Description</h2>
        <textarea className="w-full mt-4 border rounded px-3 py-2" rows="4" placeholder="Describe your account..." onChange={(e) => setFormData({ ...formData, description: e.target.value })}></textarea>
      </div>

      {/* Legal Agreement */}
      <div className="bg-white p-6 rounded shadow">
        <h2 className="text-xl font-bold flex items-center gap-2"><FaShieldAlt /> Legal Agreement</h2>
        <div className="mt-4 flex items-center gap-2">
          <input type="checkbox" onChange={(e) => setFormData({ ...formData, legalConfirm: e.target.checked })} />
          <label>I confirm that I am the legal owner of this account and have the right to sell it.</label>
        </div>
        <div className="mt-4 flex items-center gap-2">
          <input type="checkbox" onChange={(e) => setFormData({ ...formData, termsAgree: e.target.checked })} />
          <label>I agree to platform <span className="text-blue-600 underline cursor-pointer">terms and conditions</span> regarding account sales.</label>
        </div>
      </div>

      {/* Submit Button */}
      <div className="text-right">
        <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"><FaCheck className="inline mr-1" /> Submit</button>
      </div>
    </div>

  );
};


export default Dashboard;
