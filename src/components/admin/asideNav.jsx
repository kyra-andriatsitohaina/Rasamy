const AsideNav = () => {

    return (
        <div className="asideNav">
            <div className="logo">
                <img src="../img/shape.png" alt="" />
                <h1>Rasamy Gab</h1>
            </div>
            <div className="adminAuth">
                <button>
                    <img src="../img/shape.png" alt="" />
                </button>
                <h2>admin</h2>
            </div>
            <div className="menu">
                <ul>
                    <li><a href="">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 232597 333333" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" clip-rule="evenodd"><path d="M151444 5419C140355 1916 128560 0 116311 0 80573 0 48591 16155 27269 41534l54942 46222 69232-82338z" fill="#1a73e8"/><path d="M27244 41534C10257 61747 0 87832 0 116286c0 21876 4360 39594 11517 55472l70669-84002-54942-46222z" fill="#ea4335"/><path d="M116311 71828c24573 0 44483 19910 44483 44483 0 10938-3957 20969-10509 28706 0 0 35133-41786 69232-82313-14089-27093-38510-47936-68048-57286L82186 87756c8166-9753 20415-15928 34125-15928z" fill="#4285f4"/><path d="M116311 160769c-24573 0-44483-19910-44483-44483 0-10863 3906-20818 10358-28555l-70669 84027c12072 26791 32159 48289 52851 75381l85891-102122c-8141 9628-20339 15752-33948 15752z" fill="#fbbc04"/><path d="M148571 275014c38787-60663 84026-88210 84026-158728 0-19331-4738-37552-13080-53581L64393 247140c6578 8620 13206 17793 19683 27900 23590 36444 17037 58294 32260 58294 15172 0 8644-21876 32235-58320z" fill="#34a853"/></svg><span>Provinces</span> </a></li>
                    <li><a href=""><svg xmlns="http://www.w3.org/2000/svg" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" clip-rule="evenodd" viewBox="0 0 512 481.322"><path fill="#363C56" d="M512 129.801V12.236c0-3.1-1.164-5.903-3.097-8.075l-.534-.589A12.176 12.176 0 00499.71 0H238.048a12.154 12.154 0 00-8.65 3.572v.055c-1.985 1.936-3.275 4.598-3.531 7.52v147.46l150.97 119.817v77.524h49.649a6.97 6.97 0 016.966 6.97v112.796h78.541V129.801H512z"/><path fill="#D35F65" d="M496.692 475.714V15.26H241.075v155.414l135.762 107.75v197.29z"/><path fill="#363C56" fill-rule="nonzero" d="M351.265 258.128h37.951c1.605 0 3.12.67 4.212 1.762a5.926 5.926 0 011.762 4.208v47.025a5.99 5.99 0 01-1.755 4.212l-.592.507a5.948 5.948 0 01-3.627 1.245h-12.379v-38.663l-25.572-20.296zM278.691 69.265h40.658c1.615 0 3.117.671 4.208 1.762a5.927 5.927 0 011.763 4.208v47.025a5.98 5.98 0 01-1.756 4.216 5.978 5.978 0 01-4.215 1.755h-40.658a5.982 5.982 0 01-4.212-1.762 5.93 5.93 0 01-1.762-4.209V75.235c0-1.645.688-3.147 1.756-4.215l.571-.489a5.937 5.937 0 013.647-1.266zm139.734 0h40.658c1.615 0 3.124.674 4.212 1.762a5.93 5.93 0 011.762 4.208v47.025a5.98 5.98 0 01-1.756 4.216l-.571.489a5.937 5.937 0 01-3.647 1.266h-40.658a5.978 5.978 0 01-4.215-1.755 5.983 5.983 0 01-1.755-4.216V75.235c0-1.645.688-3.147 1.755-4.215l.534-.462a5.922 5.922 0 013.681-1.293zm-69.867 0h40.658c1.605 0 3.12.671 4.212 1.762a5.93 5.93 0 011.762 4.208v47.025a5.983 5.983 0 01-1.755 4.216l-.558.479a5.947 5.947 0 01-3.661 1.276h-40.658a5.978 5.978 0 01-4.215-1.755l-.462-.534a5.922 5.922 0 01-1.293-3.682V75.235c0-1.625.674-3.12 1.762-4.208a5.955 5.955 0 014.208-1.762zm-69.867 94.433h40.658c1.635 0 3.137.674 4.215 1.752l.479.561a5.894 5.894 0 011.277 3.654v47.028a5.956 5.956 0 01-1.756 4.212l-.533.462a5.92 5.92 0 01-3.682 1.294h-12.773l-33.859-26.873v-26.123a5.96 5.96 0 011.762-4.208 5.914 5.914 0 014.212-1.759zm139.734 0h40.658c1.642 0 3.141.674 4.218 1.752l.48.561a5.9 5.9 0 011.276 3.654v47.028c0 1.626-.678 3.1-1.735 4.178l-.031.028a5.918 5.918 0 01-4.208 1.762h-40.658a5.965 5.965 0 01-4.208-1.762 5.911 5.911 0 01-1.762-4.206v-47.028c0-1.625.674-3.12 1.762-4.208a5.917 5.917 0 014.208-1.759zm-69.867 0h40.658c1.642 0 3.141.674 4.219 1.752l.479.561a5.9 5.9 0 011.276 3.654v47.028c0 1.626-.678 3.1-1.735 4.178l-.031.028a5.918 5.918 0 01-4.208 1.762h-40.658a5.955 5.955 0 01-4.208-1.762 5.907 5.907 0 01-1.762-4.206v-47.028c0-1.625.674-3.12 1.762-4.208a5.917 5.917 0 014.208-1.759zm69.867 94.43h40.658c1.615 0 3.124.674 4.212 1.762a5.926 5.926 0 011.762 4.208v47.025a5.986 5.986 0 01-1.756 4.212l-.588.503a5.93 5.93 0 01-3.63 1.249h-40.658a5.99 5.99 0 01-5.97-5.964v-47.025c0-1.646.688-3.148 1.755-4.215l.534-.462a5.922 5.922 0 013.681-1.293z"/><path fill="#F8DF9E" d="M357.338 262.949h31.878c.626 0 1.153.527 1.153 1.149v47.025c0 .616-.527 1.143-1.153 1.143h-12.379v-33.842l-19.499-15.475zM278.691 74.086h40.658c.623 0 1.15.527 1.15 1.149v47.025c0 .623-.527 1.15-1.15 1.15h-40.658a1.166 1.166 0 01-1.153-1.15V75.235c0-.622.527-1.149 1.153-1.149zm139.734 0h40.658c.626 0 1.153.527 1.153 1.149v47.025c0 .623-.527 1.15-1.153 1.15h-40.658a1.165 1.165 0 01-1.149-1.15V75.235c0-.622.526-1.149 1.149-1.149zm-69.867 0h40.658c.626 0 1.153.527 1.153 1.149v47.025c0 .623-.527 1.15-1.153 1.15h-40.658a1.166 1.166 0 01-1.149-1.15V75.235c0-.622.527-1.149 1.149-1.149zm-69.867 94.433h40.658c.623 0 1.15.523 1.15 1.146v47.028c0 .62-.527 1.147-1.15 1.147H300.5l-22.962-18.227v-29.948c0-.623.527-1.146 1.153-1.146zm139.734 0h40.658c.626 0 1.153.523 1.153 1.146v47.028c0 .62-.527 1.147-1.153 1.147h-40.658a1.164 1.164 0 01-1.149-1.147v-47.028c0-.623.526-1.146 1.149-1.146zm-69.867 0h40.658c.626 0 1.153.523 1.153 1.146v47.028c0 .62-.527 1.147-1.153 1.147h-40.658a1.165 1.165 0 01-1.149-1.147v-47.028c0-.623.527-1.146 1.149-1.146zm69.867 94.43h40.658c.626 0 1.153.527 1.153 1.149v47.025c0 .616-.527 1.143-1.153 1.143h-40.658a1.164 1.164 0 01-1.149-1.143v-47.025c0-.622.526-1.149 1.149-1.149z"/><path fill="#C73F43" d="M496.691 39.383V15.261H241.077v24.122z"/><path fill="#F8EFE0" d="M32.265 481.293V332.268c-6.558 2.521-12.696 2.576-17.797.838-3.979-1.345-7.341-3.753-9.808-6.864C2.194 323.13.623 319.349.146 315.17c-.725-6.474 1.206-13.786 6.729-20.654.281-.335.587-.67.951-.951L171.621 170.79c-.998.747 59.142 40.724 163.963 122.214.251.197.477.39.7.645 7.428 7.986 9.275 16.843 7.483 24.322a22.674 22.674 0 01-5.101 9.757 22.099 22.099 0 01-9.079 6.136c-5.607 2.018-12.274 1.963-19.029-1.232v148.307h-15.695l-246.902.383-15.696-.029z"/><path fill="#313A58" d="M32.265 481.292V332.267c-6.558 2.521-12.695 2.578-17.796.84-3.98-1.345-7.342-3.755-9.808-6.866-2.467-3.111-4.037-6.894-4.513-11.07-.729-6.474 1.205-13.788 6.725-20.655.281-.336.59-.672.953-.953l159.913-124.852a5.853 5.853 0 017.567-.309l160.278 124.601c.252.197.477.392.701.644 7.427 7.987 9.276 16.843 7.483 24.326a22.685 22.685 0 01-5.101 9.754 22.082 22.082 0 01-9.08 6.137c-5.606 2.018-12.275 1.962-19.03-1.233V480.94h-15.694V325.737c0-2.831-109.943-89.738-122.078-99.183-12.864 9.781-124.826 95.988-124.826 99.631v155.136l-15.694-.029z"/><path fill="#313A58" fill-rule="nonzero" d="M172.201 305.622c16.806 0 32.083 6.873 43.141 17.932 11.058 11.058 17.932 26.331 17.932 43.138v64.752H111.13v-64.752c0-16.807 6.874-32.08 17.932-43.138 11.059-11.059 26.333-17.932 43.139-17.932zm-60.554 139.206h121.111v9.779H111.647v-9.779z"/><path fill="#ABB9BC" d="M177.09 315.599c25.962 2.483 46.443 24.511 46.443 51.093v.137H177.09v-51.23zm46.443 61.008v45.095H177.09v-45.095h46.443zm-56.222 45.095h-46.44v-45.095h46.44v45.095zm-46.44-54.873v-.137c0-26.582 20.478-48.61 46.44-51.093v51.23h-46.44z"/><path fill="#313A58" fill-rule="nonzero" d="M120.871 366.829h46.44V314.89h9.779v51.939h46.443v9.778H177.09v45.181h-9.779v-45.181h-46.44z"/><path fill="#D93133" d="M32.265 332.267c-6.558 2.521-12.695 2.578-17.796.84-3.98-1.345-7.342-3.755-9.808-6.866-2.467-3.111-4.037-6.894-4.513-11.07-.729-6.474 1.205-13.788 6.725-20.655.281-.336.59-.672.953-.953l159.913-124.852a5.853 5.853 0 017.567-.309l160.278 124.601c.252.197.477.392.701.644 7.427 7.987 9.276 16.843 7.483 24.326a22.685 22.685 0 01-5.101 9.754 22.082 22.082 0 01-9.08 6.137c-5.606 2.018-12.275 1.962-19.03-1.233l-15.694-6.894c0-2.831-109.943-89.738-122.078-99.183-12.864 9.781-124.826 95.988-124.826 99.631l-15.694 6.082z"/></svg><span>House properties</span></a></li>
                    <li><a href="">
                        <svg fill="#000000" height="800px" width="800px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
                        viewBox="0 0 245.562 245.562" xml:space="preserve">
                        <path d="M244.062,180.838L150.227,55.725c-1.417-1.889-3.639-3-6-3c-2.361,0-4.584,1.111-6,3l-38.904,51.873L83.876,87.002
                        c-1.416-1.889-3.639-3-6-3c-2.361,0-4.583,1.111-6,3L1.5,180.838c-1.704,2.272-1.978,5.314-0.708,7.855
                        c1.27,2.54,3.867,4.145,6.708,4.145h230.562c2.841,0,5.438-1.605,6.708-4.145C246.041,186.151,245.767,183.11,244.062,180.838z
                        M22.5,177.838l55.376-73.836l15.446,20.596c1.416,1.889,3.639,3,6,3c2.361,0,4.583-1.111,6-3l38.904-51.873l78.836,105.113H22.5z"
                        />
                        </svg>
                        <span>Field properties</span></a></li>
                    <li><a href="">Amenties</a></li>
                    <li><a href="">Types</a></li>
                </ul>
            </div>
        </div>
        
    )
}

export default AsideNav