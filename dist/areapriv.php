<!DOCTYPE html>
<html lang="it">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>areaPriv</title>
    <link rel="shortcut icon" href="img/favicon.ico" type="image/x-icon">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:ital,wght@0,400;0,700;1,400&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="./style.css">
</head>

<body class="bg-zinc-50">

    <header class="bg-zinc-200 w-full h-28 sm:hidden flex items-center p-4">
        <button class="burger">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="block w-10 h-10 text-stone-700">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"></path>
            </svg>
        </button>
    </header>


    <div class="w-full h-screen flex">
        <div id="menu" class="bg-neutral-800 w-72 flex flex-col fixed overflow-y-auto h-full top-0 sm:-translate-x-[70%] -translate-x-full transition duration-300 ease-cubic lg:translate-x-0">

            <section class="w-full lg:h-48 bg-stone-700 lg:flex-adjust p-6 h-auto flex justify-between">
                <a href="./index.html" class="flex-adjust">
                    <img src="./img/logo.svg" alt="" class="h-10 mr-2 hidden lg:block">
                    <p class="text-stone-200 text-xl font-bold">RESERVICE</p>
                </a>
                <button class="burger lg:hidden z-50 block md:static">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="block w-10 h-10 text-stone-200">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"></path>
                    </svg>
                </button>
            </section>

            <ul class="flex flex-col h-full">
                <li class="border-l-4 border-darkazzurro transition-all duration-100 ease-cubic group">
                    <a href="#" class="text-stone-400 group-hover:text-darkazzurro text-lg flex items-center dashboard-nav-link justify-end lg:justify-start px-4 py-2.5">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="sm:fill-darkazzurro lg:fill-stone-400 group-hover:fill-darkazzurro block m-4">
                            <path d="M5 22h14a2 2 0 0 0 2-2v-9a1 1 0 0 0-.29-.71l-8-8a1 1 0 0 0-1.41 0l-8 8A1 1 0 0 0 3 11v9a2 2 0 0 0 2 2zm5-2v-5h4v5zm-5-8.59 7-7 7 7V20h-3v-5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v5H5z"></path>
                        </svg>
                        <span class="dashboard-nav-text hidden lg:block">Home</span>
                    </a>
                </li>
                <li class="hover:border-l-4 hover:border-darkazzurro border-stone-700 transition-all duration-100 ease-cubic group">
                    <a href="./anaytics.html" class="text-stone-400 group-hover:text-darkazzurro text-lg flex items-center dashboard-nav-link justify-end lg:justify-start px-4 py-2.5">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="fill-stone-400 group-hover:fill-darkazzurro block m-4">
                            <path d="M3 3v17a1 1 0 0 0 1 1h17v-2H5V3H3z"></path>
                            <path d="M15.293 14.707a.999.999 0 0 0 1.414 0l5-5-1.414-1.414L16 12.586l-2.293-2.293a.999.999 0 0 0-1.414 0l-5 5 1.414 1.414L13 12.414l2.293 2.293z"></path>
                        </svg>
                        <span class="dashboard-nav-text hidden lg:block">Analitica</span>
                    </a>
                </li>
                <li class="hover:border-l-4 hover:border-darkazzurro border-stone-700 transition-all duration-100 ease-cubic group">
                    <a href="#" class="text-stone-400 place group-hover:text-darkazzurro text-lg flex items-center dashboard-nav-link justify-end lg:justify-start px-4 py-2.5">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="fill-stone-400 group-hover:fill-darkazzurro block m-4">
                            <path d="m6.516 14.323-1.49 6.452a.998.998 0 0 0 1.529 1.057L12 18.202l5.445 3.63a1.001 1.001 0 0 0 1.517-1.106l-1.829-6.4 4.536-4.082a1 1 0 0 0-.59-1.74l-5.701-.454-2.467-5.461a.998.998 0 0 0-1.822 0L8.622 8.05l-5.701.453a1 1 0 0 0-.619 1.713l4.214 4.107zm2.853-4.326a.998.998 0 0 0 .832-.586L12 5.43l1.799 3.981a.998.998 0 0 0 .832.586l3.972.315-3.271 2.944c-.284.256-.397.65-.293 1.018l1.253 4.385-3.736-2.491a.995.995 0 0 0-1.109 0l-3.904 2.603 1.05-4.546a1 1 0 0 0-.276-.94l-3.038-2.962 4.09-.326z"></path>
                        </svg>
                        <span class="dashboard-nav-text hidden lg:block">Abbonamento</span>
                    </a>
                </li>
                <li class="hover:border-l-4 hover:border-darkazzurro border-stone-700 transition-all duration-100 ease-cubic group">
                    <a href="#" class="text-stone-400 group-hover:text-darkazzurro text-lg flex items-center dashboard-nav-link justify-end lg:justify-start px-4 py-2.5">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="fill-stone-400 group-hover:fill-darkazzurro block m-4">
                            <path d="M19 4h-2V2h-2v2H9V2H7v2H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2zm.002 16H5V8h14l.002 12z"></path>
                            <path d="m11 17.414 5.707-5.707-1.414-1.414L11 14.586l-2.293-2.293-1.414 1.414z"></path>
                        </svg>
                        <span class="dashboard-nav-text hidden lg:block">Agenda</span>
                    </a>
                </li>
                <li class="hover:border-l-4 hover:border-darkazzurro border-stone-700 transition-all duration-100 ease-cubic group">
                    <a href="#" class="text-stone-400 group-hover:text-darkazzurro text-lg flex items-center dashboard-nav-link justify-end lg:justify-start px-4 py-2.5">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="fill-stone-400 group-hover:fill-darkazzurro block m-4">
                            <path d="M7 7h10v2H7zm0 4h7v2H7z"></path>
                            <path d="M20 2H4c-1.103 0-2 .897-2 2v18l5.333-4H20c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2zm0 14H6.667L4 18V4h16v12z"></path>
                        </svg>
                        <span class="dashboard-nav-text hidden lg:block">Recensioni</span>
                    </a>
                </li>
                <li class="flex-1"></li>

                <li class="hover:border-l-4 hover:border-darkazzurro border-stone-700 transition-all duration-100 ease-cubic group w-full">
                    <a href="./logout.php" class="text-stone-400 group-hover:text-darkazzurro text-lg flex items-center dashboard-nav-link justify-end lg:justify-start px-4 py-2.5">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="fill-stone-400 group-hover:fill-darkazzurro block m-4">
                            <path d="M12 21c4.411 0 8-3.589 8-8 0-3.35-2.072-6.221-5-7.411v2.223A6 6 0 0 1 18 13c0 3.309-2.691 6-6 6s-6-2.691-6-6a5.999 5.999 0 0 1 3-5.188V5.589C6.072 6.779 4 9.65 4 13c0 4.411 3.589 8 8 8z"></path>
                            <path d="M11 2h2v10h-2z"></path>
                        </svg>
                        <span class="dashboard-nav-text hidden lg:block">Logout</span>
                    </a>
                </li>
                <li class="hover:border-l-4 hover:border-darkazzurro border-stone-700 transition-all duration-100 ease-cubic group w-full">
                    <a href="./cambiopassword.php" class="text-stone-400 group-hover:text-darkazzurro text-lg flex items-center dashboard-nav-link justify-end lg:justify-start px-4 py-2.5">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="fill-stone-400 group-hover:fill-darkazzurro block m-4">
                            <path class="fill-stone-400 group-hover:fill-darkazzurro block m-4" fill-rule="evenodd" clip-rule="evenodd" d="M9.99996 2C9.44768 2 8.99996 2.44772 8.99996 3V4.58178C8.30471 4.86318 7.65844 5.23923 7.07704 5.69365L5.70573 4.90193C5.47605 4.76932 5.20309 4.73338 4.94691 4.80202C4.69073 4.87067 4.47232 5.03827 4.33971 5.26795L2.33971 8.73205C2.06357 9.21034 2.22744 9.82193 2.70573 10.0981L4.07654 10.8895C4.02603 11.2528 3.99997 11.6236 3.99997 12C3.99997 12.3764 4.02603 12.7471 4.07654 13.1105L2.70574 13.9019C2.47605 14.0345 2.30846 14.2529 2.23981 14.5091C2.17117 14.7653 2.2071 15.0382 2.33971 15.2679L4.33971 18.732C4.47232 18.9617 4.69074 19.1293 4.94692 19.198C5.2031 19.2666 5.47605 19.2307 5.70574 19.0981L7.07706 18.3063C7.65846 18.7607 8.30472 19.1368 8.99996 19.4182V21C8.99996 21.5523 9.44768 22 9.99996 22H14C14.5522 22 15 21.5523 15 21V19.4182C15.6952 19.1368 16.3415 18.7607 16.9229 18.3063L18.2942 19.0981C18.5239 19.2307 18.7968 19.2666 19.053 19.198C19.3092 19.1293 19.5276 18.9617 19.6602 18.7321L21.6602 15.268C21.7928 15.0383 21.8288 14.7653 21.7601 14.5091C21.6915 14.253 21.5239 14.0345 21.2942 13.9019L19.9234 13.1105C19.9739 12.7472 20 12.3764 20 12C20 11.6236 19.9739 11.2528 19.9234 10.8895L21.2942 10.0981C21.7725 9.82191 21.9364 9.21032 21.6602 8.73203L19.6602 5.26793C19.5276 5.03824 19.3092 4.87065 19.053 4.802C18.7968 4.73336 18.5239 4.76929 18.2942 4.9019L16.9229 5.69364C16.3415 5.23922 15.6952 4.86318 15 4.58178V3C15 2.44772 14.5522 2 14 2H9.99996ZM11 5.28986V4H13V5.28986C13 5.73228 13.2907 6.12211 13.7147 6.24831C14.6258 6.51947 15.4475 7.00198 16.1223 7.64029C16.4436 7.94424 16.9264 8.00099 17.3095 7.77984L18.4282 7.13395L19.4282 8.866L18.3109 9.51107C17.9281 9.73205 17.7358 10.1781 17.8379 10.6081C17.9437 11.0538 18 11.5197 18 12C18 12.4803 17.9437 12.9462 17.8379 13.3919C17.7358 13.8219 17.9281 14.2679 18.3109 14.4889L19.4282 15.134L18.4282 16.866L17.3094 16.2201C16.9264 15.999 16.4436 16.0557 16.1222 16.3597C15.4475 16.998 14.6258 17.4805 13.7147 17.7516C13.2907 17.8778 13 18.2677 13 18.7101V20H11V18.7101C11 18.2677 10.7092 17.8778 10.2852 17.7516C9.37409 17.4805 8.55246 16.998 7.87767 16.3597C7.55635 16.0557 7.07352 15.999 6.69048 16.2201L5.57176 16.866L4.57176 15.134L5.68905 14.4889C6.0718 14.2679 6.26409 13.8219 6.16201 13.3919C6.05621 12.9462 5.99997 12.4803 5.99997 12C5.99997 11.5197 6.0562 11.0538 6.16201 10.6081C6.26409 10.1781 6.07179 9.73207 5.68905 9.51109L4.57176 8.86603L5.57176 7.13398L6.69046 7.77986C7.07351 8.00101 7.55633 7.94425 7.87766 7.6403C8.55245 7.00199 9.37409 6.51948 10.2852 6.24831C10.7092 6.12211 11 5.73228 11 5.28986ZM9.99998 12C9.99998 10.8954 10.8954 10 12 10C13.1046 10 14 10.8954 14 12C14 13.1046 13.1046 14 12 14C10.8954 14 9.99998 13.1046 9.99998 12ZM12 8C9.79084 8 7.99998 9.79086 7.99998 12C7.99998 14.2091 9.79084 16 12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8Z" fill="#000000" />
                        </svg>
                        <span class="dashboard-nav-text hidden lg:block">Impostazioni</span>
                    </a>
                </li>
            </ul>

        </div>

        <section class="flex justify-center flex-1 lg:ml-72 sm:ml-[88px]">
        </section>
    </div>

    <script src="./menu.js"></script>
</body>

</html>